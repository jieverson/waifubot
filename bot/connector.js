const builder = require('botbuilder')
const router = require('./router.js')

// Keep your sensitive data safe at environment variables
const botAppId = process.env.BOT_APP_ID || 'YOUR_APP_ID'
const botAppSecret = process.env.BOT_APP_PASSWORD || 'YOUR_APP_PASSWORD'

// Create bot and add router
var connector = new builder.ChatConnector({
    appId: botAppId,
    appPassword: botAppSecret
})
var bot = new builder.UniversalBot(connector);
bot.dialog('/', router)

module.exports = connector