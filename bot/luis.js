const builder = require('botbuilder')

// Keep your sensitive data safe at environment variables
const appId = process.env.LUIS_APP_ID || 'YOUR_LUIS_APP_ID'
const subscriptionKey = process.env.LUIS_SUBSCRIPTION_KEY || 'YOUR_LUIS_SUBSCRIPTION_KEY'

// LUIS: Natural Language
const modelUrl = 'https://api.projectoxford.ai/luis/v1/application?id=' + appId + '&subscription-key=' + subscriptionKey
let recognizer = new builder.LuisRecognizer(modelUrl);
let dialog = new builder.IntentDialog({ recognizers: [recognizer] });

module.exports = dialog