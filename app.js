var restify = require('restify');
var builder = require('botbuilder');

// Keep your sensitive data safe at environment variables
var botAppId = process.env.BOT_APP_ID || "YOUR_APP_ID";
var botAppSecret = process.env.BOT_APP_SECRET || "YOUR_APP_SECRET";
var luisAppId = process.env.LUIS_APP_ID || "YOUR_LUIS_APP_ID";
var luisSubscriptionKey = process.env.LUIS_SUBSCRIPTION_KEY || "YOUR_LUIS_SUBSCRIPTION_KEY";

// LUIS: Natural Language
var luisModelUrl = 'https://api.projectoxford.ai/luis/v1/application?id=' + luisAppId + '&subscription-key=' + luisSubscriptionKey;
var luis = new builder.LuisDialog(luisModelUrl);

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: botAppId, appSecret: botAppSecret });
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
                               .addAttachment({ fallbackText: text, contentType: 'image/jpeg', contentUrl: "https://github.com/jieverson/waifubot/blob/master/pictures/shy.jpg?raw=true" });
        session.send(reply);
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

// Setup Restify Server
var server = restify.createServer();
server.post('/api/bot', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});