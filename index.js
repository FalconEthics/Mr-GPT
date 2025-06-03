require("dotenv").config();

// Prepare to connect discord api
const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//prepare to connect openai api
const {Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const {REST, Routes, SlashCommandBuilder, InteractionType} = require("discord.js");
const mongoose = require("mongoose");
const winston = require("winston");

// Logger setup
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

// MongoDB setup
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => logger.info("MongoDB connected"))
  .catch((err) => logger.error("MongoDB connection error:", err));

const conversationSchema = new mongoose.Schema({
  userId: String,
  history: [
    {
      role: String,
      content: String,
      timestamp: {type: Date, default: Date.now},
    },
  ],
  lastUsed: {type: Date, default: Date.now},
  usageCount: {type: Number, default: 0},
});
const Conversation = mongoose.model("Conversation", conversationSchema);

// Register slash command
const commands = [
  new SlashCommandBuilder()
    .setName("chatgpt")
    .setDescription("Ask ChatGPT a question!")
    .addStringOption(option =>
      option.setName("prompt").setDescription("Your question").setRequired(true)
    )
    .toJSON(),
];

const rest = new REST({version: "10"}).setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      {body: commands}
    );
    logger.info("Slash commands registered");
  } catch (error) {
    logger.error("Error registering slash commands:", error);
  }
})();

// Rate limiting config
const RATE_LIMIT = 5; // max requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

client.on("interactionCreate", async (interaction) => {
  if (interaction.type !== InteractionType.ApplicationCommand) return;
  if (interaction.commandName !== "chatgpt") return;
  const userId = interaction.user.id;
  const prompt = interaction.options.getString("prompt");
  try {
    // Rate limiting
    let convo = await Conversation.findOne({userId});
    const now = new Date();
    if (!convo) {
      convo = new Conversation({userId, history: [], usageCount: 0});
    } else {
      // Reset usage count if window has passed
      if (now - convo.lastUsed > RATE_LIMIT_WINDOW) {
        convo.usageCount = 0;
      }
      if (convo.usageCount >= RATE_LIMIT) {
        await interaction.reply({content: "Rate limit exceeded. Try again later.", ephemeral: true});
        return;
      }
    }
    convo.usageCount += 1;
    convo.lastUsed = now;
    convo.history.push({role: "user", content: prompt});
    // Keep only last 10 messages for context
    convo.history = convo.history.slice(-10);
    await convo.save();

    await interaction.reply({content: "Processing your query...", ephemeral: true});
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        ...convo.history.map(h => ({role: h.role, content: h.content})),
      ],
      max_tokens: 512,
      temperature: 0.7,
    });
    const botReply = response.data.choices[0].message.content;
    convo.history.push({role: "assistant", content: botReply});
    convo.history = convo.history.slice(-10);
    await convo.save();
    await interaction.editReply(botReply);
    logger.info(`User ${userId} asked: ${prompt}`);
  } catch (error) {
    logger.error("Error handling interaction:", error);
    try {
      await interaction.editReply("An error occurred. Please try again later.");
    } catch {
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
logger.info("ChatGPT Discord bot is running");