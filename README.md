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
    <img src="./logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mr-GPT</h3>

  <p align="center">
    - Mr. GPT is a Discord bot that uses OpenAI's GPT 3.5 learning model to generate text in response to user commands. The bot uses OpenAI's API, Discord's API, and JavaScript for building it. The bot can generate a wide range of responses to user inputs, making it a fun and interactive addition to any Discord server.
    <br />
    <a href=#installation><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#acknowledgments">View Demo</a>
    ·
    <a href="https://github.com/FalconEthics/Mr-GPT/issues">Report Bug</a>
    ·
    <a href="https://github.com/FalconEthics/Mr-GPT/issues">Request Feature</a>
  </p>
</div>

[![Product Name Screen Shot][product-screenshot]](https://keeper-app-falconethics.vercel.app/)


<!-- Installation -->
## Installation

Step 1: Create a new Discord bot

Firstly, you need to create a new Discord bot. You can do this by going to the Discord Developer Portal (https://discord.com/developers/applications) and creating a new application. Give your application a name and click on "Create".

Once you've created your application, click on the "Bot" tab on the left-hand side of the page and click on "Add Bot". This will create a new bot account for your application.

Step 2: Add the bot to your Discord server

Next, you need to add the bot to your Discord server. You can do this by going to the "OAuth2" tab on the left-hand side of the page, selecting the "bot" scope, and then selecting the permissions you want the bot to have. Once you've selected the permissions, you can copy the URL and paste it into your web browser. This will take you to a page where you can select the server you want to add the bot to.

Step 3: Install the necessary dependencies

You'll need to install the necessary dependencies for your bot to work. The main one you'll need is the Discord.py library, which you can install using pip.

Open your command prompt or terminal and run the following command:
```s
pip install discord.py
```
Step 4: Write the code to interact with ChatGPT

Next, you need to write the code to interact with ChatGPT. Here's some sample code to get you started:
```s
import discord
import openai
import os

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    openai.api_key = "YOUR_API_KEY"

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$'):
        input_text = message.content[1:]
        response = openai.Completion.create(
            engine="davinci",
            prompt=input_text,
            temperature=0.5,
            max_tokens=100,
            n=1,
            stop=None,
            frequency_penalty=0,
            presence_penalty=0
        )
        output_text = response.choices[0].text
        await message.channel.send(output_text)

client.run('YOUR_DISCORD_BOT_TOKEN')

```
Here, we're using the OpenAI API to generate a response based on the input text provided by the user. We're using the "davinci" engine, which is the most powerful and accurate engine provided by OpenAI. You'll need to replace "YOUR_API_KEY" with your actual OpenAI API key and "YOUR_DISCORD_BOT_TOKEN" with the token for your Discord bot.

Step 5: Run the bot

Finally, you need to run the bot. Open your command prompt or terminal and navigate to the directory where your code is saved. Then, run the following command:
```s
python your_file_name.py
```
Replace "your_file_name.py" with the name of your Python file. If everything is set up correctly, your bot should start running and you should see a message in your Discord server indicating that the bot is online.

Step 6: Test the bot

To test the bot, simply type a message starting with the "$" symbol in one of your Discord channels. The bot should respond with a generated message based on the input text you provided. If everything is working correctly, you should be able to have a conversation with ChatGPT using your Discord server!

I hope this guide helped, for furthur more details contact me via <a href="https://www.linkedin.com/in/soumik-das-profile/">LinkedIn</a> 
<br>
<br>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
 ```sh
git checkout -b feature/AmazingFeature
```
3. Commit your Changes 
```s
git commit -m Add some AmazingFeature
```
4. Push to the Branch 
```s
git push origin feature/AmazingFeature
```
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<ul>
<li><a href="https://www.linkedin.com/in/soumik-das-profile/"> LinkedIn Profile</a></li>
<li><a href="https://mrsoumikdas.com"> Portfolio Site</a></li>
<li><a href="https://twitter.com/Mr_Soumik_Das"> Twitter Handle</a></li>
</ul>

~ wanna checkout my other projects: [https://github.com/FalconEthics](https://github.com/FalconEthics)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

 ~The server it is onn right now is a private server of me and my classmates because right now i am hosting the bot with free servers and they have usage limitations, comment below if you guys are interested in a public server with ai implementations like this and many more exciting features by me and my friends from UOL. We will release a separate server for that if there are enough people to utilize the features.

 <!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/FalconEthics/Keeper-app.svg?style=for-the-badge
[contributors-url]: https://github.com/FalconEthics/keeper-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FalconEthics/Keeper-app.svg?style=for-the-badge
[forks-url]: https://github.com/FalconEthics/keeper-app/network/members
[stars-shield]: https://img.shields.io/github/stars/FalconEthics/Keeper-app.svg?style=for-the-badge
[stars-url]: https://github.com/FalconEthics/keeper-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/FalconEthics/Keeper-app.svg?style=for-the-badge

[issues-url]: https://github.com/FalconEthics/keeper-app/issues
[license-shield]: https://img.shields.io/github/license/FalconEthics/Keeper-app.svg?style=for-the-badge

[license-url]: https://github.com/FalconEthics/keeper-app/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/soumik-das-profile/

[product-screenshot]: https://raw.githubusercontent.com/FalconEthics/Mr-GPT/main/screenshot.png
