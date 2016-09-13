const FormData = require('form-data')
const fetch = require('node-fetch')

// Keep your sensitive data safe at environment variables
const key = process.env.TEXT_ANALYTICS_KEY || 'YOUR_TEXT_ANALYTICS_KEY'

module.exports = {
    sentiment: text => new Promise((resolve, reject) => {
        const url = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment'
        let headers = new FormData()
        headers.append("Content-Type", "application/json");
        headers.append("Ocp-Apim-Subscription-Key", key);
        let data = {
            documents: [{
                language: 'en',
                id: 'WaifuBot',
                text: text
            }]
        }
        let dataStr = JSON.stringify(data)
        fetch(url, {
            method: 'post',
            //headers: headers.getHeaders(),
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': key
            },
            body: dataStr
        })
        .then(response => response.json())
        .then(data => data.documents[0])
        .then(doc => resolve(doc.score))
        .catch(err => reject(err))
    })
}