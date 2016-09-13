const builder = require('botbuilder')
const router = require('./router.js')

require('./ext.js')

// Keep your sensitive data safe at environment variables
const appId = process.env.BOT_APP_ID || 'YOUR_APP_ID'
const appPassword = process.env.BOT_APP_PASSWORD || 'YOUR_APP_PASSWORD'

// Create bot and add router
let connector = new builder.ChatConnector({
    appId: appId,
    appPassword: appPassword
})
let bot = new builder.UniversalBot(connector);
bot.use(builder.Middleware.sendTyping())
bot.dialog('/', router)

module.exports = connector