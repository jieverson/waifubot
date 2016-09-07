const builder = require('botbuilder')

// Keep your sensitive data safe at environment variables
const luisAppId = process.env.LUIS_APP_ID || 'YOUR_LUIS_APP_ID'
const luisSubscriptionKey = process.env.LUIS_SUBSCRIPTION_KEY || 'YOUR_LUIS_SUBSCRIPTION_KEY'

// LUIS: Natural Language
const luisModelUrl = 'https://api.projectoxford.ai/luis/v1/application?id=' + luisAppId + '&subscription-key=' + luisSubscriptionKey
const luis = new builder.LuisDialog(luisModelUrl)

module.exports = luis