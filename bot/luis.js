const builder = require('botbuilder')

// Keep your sensitive data safe at environment variables
const luisAppId = process.env.LUIS_APP_ID || 'YOUR_LUIS_APP_ID'
const luisSubscriptionKey = process.env.LUIS_SUBSCRIPTION_KEY || 'YOUR_LUIS_SUBSCRIPTION_KEY'

// LUIS: Natural Language
const modelUrl = 'https://api.projectoxford.ai/luis/v1/application?id=' + luisAppId + '&subscription-key=' + luisSubscriptionKey
const recognizer = new builder.LuisRecognizer(modelUrl);
const dialog = new builder.IntentDialog({ recognizers: [recognizer] });

module.exports = dialog