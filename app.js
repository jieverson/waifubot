var restify = require('restify');
var builder = require('botbuilder');

// Sensitive data load (you should create this file to keep your keys)
try{
    var secrets = require('./.waifu/secrets.json');    
}
catch(ex){
    var secrets = {
        botAppId: "YOUR_APP_ID",
        botAppSecret: "YOUR_APP_SECRET"
    };
}

// LUIS: Natural Language
var languageModel = 'https://api.projectoxford.ai/luis/v1/application?id=ab78644d-ecc4-4cd2-8414-388f05d34d0b&subscription-key=43f70f72c0a34f8598f0fa3faf8bb43e';
var luis = new builder.LuisDialog(languageModel);

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: secrets.botAppId, appSecret: secrets.botAppSecret });
bot.add('/', luis);

// Add intent handlers
luis.on('Init', [
    function (session) {
        session.send("Okaeri! Nice to see you again senpai. Why don't you ask for current season animes, quotes, jokes or just tell me animes you like?");
    }
]);

luis.on('Greeting', [
    function (session) {
        var text = "Please, don't say this in front of the others...";
        var reply = new builder.Message()
                               .setText(session, text)
                               .addAttachment({ fallbackText: text, contentType: 'image/jpeg', contentUrl: "http://i.imgur.com/v9PfX.jpg" });
        session.endDialog(reply);
    }
]);

luis.on('LikeAnime', [
    function (session, args) {
        if(args && args.entities && args.entities.length > 0){
            session.send("Cool! I like '%s' too.", args.entities[0].entity);
        }
        else{
            session.send("I'm so happy you liked this Anime.");
        }
    }
]);

luis.on('CurrentSeasonAnimes', [
    function (session) {
        session.send("Not implemented yet. But I will work hard on it senpai!");
    }
]);

luis.on('Quote', [
    function (session, args) {
        session.send("Developers say they are lazy to crawler a quote's website just to make you happy.");
    }
]);

luis.on('TellJoke', [
    function (session) {
        session.send("How does Hei like his coffee? Darker Than Black :)");
    }
]);

// No intent match
luis.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. Say Hello."));

// Old bot
/*bot.add('/', function (session) {
    session.send('Okaeri!');
});*/

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});