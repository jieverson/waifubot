// You will have to create this file, and put your keys here.
try{
    var secrets = require('./.waifu/secrets.json');    
}
catch(ex){
    var secrets = {
        botAppId: "YOUR_APP_ID",
        botAppSecret: "YOUR_APP_SECRET"
    };
}

var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: secrets.botAppId, appSecret: secrets.botAppSecret });
bot.add('/', function (session) {
    session.send('Okaeri!');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});