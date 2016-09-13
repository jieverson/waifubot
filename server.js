const restify = require('restify')
const botConnector = require('./bot/connector.js')

// Setup Restify Server
let server = restify.createServer()
server.listen(process.env.port || 3978, () => {
    console.log('Waifu is listening to %s', server.url) 
})

server.post('/api/bot', botConnector.listen())