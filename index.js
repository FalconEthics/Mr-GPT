//create an implementaion of chatgpt of openai for discord
require("dotenv").config();

// Prepare to connect discord api
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//prepare to connect openai api
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

//check for when message is sent
client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;

    if (message.channelId == "1082554120612876308") {
      message.reply("w8 processing... your query");
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Hey give me a response to this message: ${message.content}`,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });
      message.reply(`${response.data.choices[0].text}`);
    }
  } catch (error) {
    console.log(error);
  }
});

//Login to discord
client.login(process.env.DISCORD_TOKEN);
console.log("ChatGPT is running");
