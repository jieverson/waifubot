const builder = require('botbuilder')
const router = require('./router.js')

// Keep your sensitive data safe at environment variables
const botAppId = process.env.BOT_APP_ID || 'YOUR_APP_ID'
const botAppSecret = process.env.BOT_APP_SECRET || 'YOUR_APP_SECRET'

// Create bot and add router
let bot = new builder.BotConnectorBot({ appId: botAppId, appSecret: botAppSecret })
bot.add('/', router)

module.exports = bot