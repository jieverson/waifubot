const restify = require('restify')
const botConnector = require('./bot/connector.js')

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || 3978, () => {
    console.log('%s listening to %s', server.name, server.url) 
})

server.post('/api/bot', botConnector.listen())