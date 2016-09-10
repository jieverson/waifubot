const builder = require('botbuilder')
const router = require('./router.js')

// Keep your sensitive data safe at environment variables
const appId = process.env.BOT_APP_ID || 'YOUR_APP_ID'
const appPassword = process.env.BOT_APP_PASSWORD || 'YOUR_APP_PASSWORD'

// Create bot and add router
const connector = new builder.ChatConnector({
    appId: appId,
    appPassword: appPassword
})
const bot = new builder.UniversalBot(connector);
bot.dialog('/', router)

module.exports = connector