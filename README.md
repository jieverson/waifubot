# waifubot

A multi-plataform bot, built with [Microsoft Bot Framework](https://github.com/Microsoft/BotBuilder).

I always dreamed of having a waifu written in JavaScript. So I made it.

<p align="center">
  <img src="docs/images/demo.gif" />
</p>

## Features

* Shit talking
* TODO: Alerts
* TODO: Plugins in Pure JavaScript
* Actually, looking for suggestions...

## Usage

You can try the last released build by running [./index.html](./index.html):

>**Note:** Waifu implements `continuous deployment` to Azure.

In the future, the bot is going to be available to:
* Slack
* Skype
* Email
* SMS
* Probably other stuff...

## How to make Plugins

We don't have anything done yet, so come back later.

## Install/Run from Source

```shell
# Clone this repo
git clone https://github.com/jieverson/waifubot.git
# Go into the repo
cd waifubot
# Install dependencies
npm install
# Run the server at localhost
node app.js
# Run the BFEmulator
cd emulator
BFEmulator.exe
# Say Hi, and have some fun :)
```

<p align="center">
  <img src="docs/images/emulator.gif" />
</p>

>**Note:** You will have to provide your appId/appSecret. Put them at the file `./.waifu/secrets.json`.

## License

MIT