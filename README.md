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

Current, you can run [demo/index.html](demo/index.html), to talk to the last released build.

Waifu implements `continuous deployment`, so the released version will always be updated to the last pushed version.

In the future, the bot is going to be available to:
* Direct Line
* Slack
* Skype
* Email
* SMS

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