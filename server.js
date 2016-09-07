const restify = require('restify')
const bot = require('./bot/bot.js')

// Setup Restify Server
const server = restify.createServer()
server.post('/api/bot', bot.verifyBotFramework(), bot.listen())
server.listen(process.env.port || 3978, () => {
    console.log('%s listening to %s', server.name, server.url) 
})