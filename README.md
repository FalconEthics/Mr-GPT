<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FalconEthics/Mr-GPT">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mr-GPT: Discord AI Chatbot</h3>

  <p align="center">
    A modern Discord bot powered by OpenAI's GPT-3.5/4, with persistent conversation, rate limiting, and MongoDB support.
    <br />
    <a href="#getting-started"><strong>Get Started »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FalconEthics/Mr-GPT/issues">Report Bug</a>
    ·
    <a href="https://github.com/FalconEthics/Mr-GPT/issues">Request Feature</a>
  </p>
</div>

## About The Project

Mr-GPT is a Discord bot that leverages OpenAI's latest GPT models to generate intelligent, context-aware responses to
user queries. It supports slash commands, persistent conversation history (MongoDB), user rate limiting, and robust
logging. Ideal for communities, study groups, and anyone who wants a smart AI assistant in their Discord server.

---

## Getting Started

### Prerequisites

- Node.js v18 or newer
- A Discord bot token & client ID ([Discord Developer Portal](https://discord.com/developers/applications))
- OpenAI API key ([OpenAI Platform](https://platform.openai.com/))
- MongoDB Atlas URI ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/FalconEthics/Mr-GPT.git
   cd Mr-GPT
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   DISCORD_CLIENT_ID=your_discord_client_id
   OPENAI_KEY=your_openai_api_key
   OPENAI_ORG=your_openai_organization_id
   MONGO_URI=your_mongodb_connection_string
   ```

---

## Usage

- Invite your bot to your Discord server using the OAuth2 URL from the Discord Developer Portal.
- Use the `/chatgpt` slash command to interact with the bot.
- The bot maintains conversation context and rate limits users to prevent abuse.

---

## Deployment

### Docker (Recommended)

1. **Build and run with Docker**
   ```sh
   docker build -t mr-gpt .
   docker run --env-file .env mr-gpt
   ```

### Render.com

1. Push your code to GitHub.
2. Create a new Web Service on [Render](https://render.com/).
3. Connect your GitHub repo and select this project.
4. Set the environment variables as above in the Render dashboard.
5. Add a MongoDB Atlas database and use its connection string for `MONGO_URI`.
6. Render will build and run your bot using the Dockerfile.

### MongoDB Atlas Setup

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster.
- Add a database user and whitelist your IP or set to allow all IPs (for bots).
- Copy the connection string and use it as `MONGO_URI`.

---

## Key Features

- **Slash Commands**: Modern Discord interaction with `/chatgpt`.
- **Persistent Conversation**: Remembers user context using MongoDB.
- **Rate Limiting**: Prevents abuse by limiting requests per user.
- **Latest OpenAI Models**: Uses GPT-3.5-turbo or GPT-4.
- **Logging & Error Tracking**: Winston logger for robust monitoring.
- **Easy Deployment**: Dockerfile and Render support.

---

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to
discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```sh
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the Branch
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## License

Distributed under the GNU License. See [`LICENSE`](./LICENSE) for more information.

## Contact

[![LinkedIn][linkedin-badge]][linkedin-url]
[![Portfolio][portfolio-badge]][portfolio-url]
[![Gmail][gmail-badge]][gmail-url]

Soumik Das - [mrsoumikdas.com](https://mrsoumikdas.com/)

Project Link: [https://github.com/FalconEthics/Mr-GPT](https://github.com/FalconEthics/Mr-GPT)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/FalconEthics/Mr-GPT.svg?style=for-the-badge

[contributors-url]: https://github.com/FalconEthics/Mr-GPT/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/FalconEthics/Mr-GPT.svg?style=for-the-badge

[forks-url]: https://github.com/FalconEthics/Mr-GPT/network/members

[stars-shield]: https://img.shields.io/github/stars/FalconEthics/Mr-GPT.svg?style=for-the-badge

[stars-url]: https://github.com/FalconEthics/Mr-GPT/stargazers

[issues-shield]: https://img.shields.io/github/issues/FalconEthics/Mr-GPT.svg?style=for-the-badge

[issues-url]: https://github.com/FalconEthics/Mr-GPT/issues

[license-shield]: https://img.shields.io/github/license/FalconEthics/Mr-GPT.svg?style=for-the-badge

[license-url]: https://github.com/FalconEthics/Mr-GPT/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/soumik-das-profile/

[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white

[portfolio-badge]: https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white

[portfolio-url]: https://mrsoumikdas.com/

[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white

[gmail-url]: mailto:mail2soumikdas@gmail.com