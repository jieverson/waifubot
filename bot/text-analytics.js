const fetch = require('node-fetch')
const sentiment = require('./sentiment')

// Keep your sensitive data safe at environment variables
const key = process.env.TEXT_ANALYTICS_KEY || 'YOUR_TEXT_ANALYTICS_KEY'

module.exports = {
    sentiment: (text, session) => {
        const url = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment'
        let data = {
            documents: [{
                language: 'en',
                id: 'WaifuBot',
                text: text
            }]
        }
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': key
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => data.documents[0])
        .then(doc => sentiment(doc.score, session))
        .catch(err => session.send("I'm sorry I didn't understand. Say Hello."))
    }
}