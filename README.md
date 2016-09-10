# waifubot

A javascript bot for **Anime Lovers**, built using [Microsoft Bot Framework](https://github.com/Microsoft/BotBuilder) and processing natural language with [LUIS](https://www.luis.ai/).

See it running at: http://jieverson.com/waifubot

<a href="https://slack.com/oauth/authorize?scope=bot&client_id=78282286007.78272748848" target="_blank"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

> I always dreamed of having a waifu written in JavaScript. So I made it myself.

<p align="center">
  <img src="docs/images/demo.gif" />
</p>

> Otakus gonna love it!

## Features

* Commands in natural language (just English now)
* TODO: Alerts
* TODO: Plugins in Pure JavaScript
* Actually, looking for suggestions...

## Usage

You can try the last released build by running [./index.html](https://rawgit.com/jieverson/waifubot/master/index.html):

>**Note:** Waifu implements `continuous deployment` to Azure.

In the future, the bot is going to be available to:
* terminal
* Twitter
* Slack
* Skype
* Email
* SMS
* Probably other stuff...

## Install/Run from Source

Create your bot at [Bot Framework](https://dev.botframework.com/) and get a appId and appPassword.
Create a new app at [LUIS](https://www.luis.ai/) importing our provided [luis_model.json](./luis_model.json).

```shell
# Clone this repo
git clone https://github.com/jieverson/waifubot.git
# Go into the repo
cd waifubot
# Install dependencies
npm install
# Set environment variables
set BOT_APP_ID=YOUR_BOT_APP_ID
set BOT_APP_PASSWORD=YOUR_BOT_APP_PASSWORD
set LUIS_APP_ID=YOUR_LUIS_APP_ID
set LUIS_SUBSCRIPTION_KEY=YOUR_LUIS_SUBSCRIPTION_KEY
set ANILIST_CLIENT_ID=YOUR_ANILIST_CLIENT_ID
set ANILIST_CLIENT_SECRET=YOUR_ANILIST_CLIENT_SECRET
# Run server at localhost
node .
```

## Running on emulator

Download and install Bot [Framework Channel Emulator](https://download.botframework.com/bf-v3/tools/emulator/publish.htm).
Setup your AppId and appPassword.
Make sure Bot Url is set to your node server.

## License

[The MIT License (MIT)](./LICENSE)
