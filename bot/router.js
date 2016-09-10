const builder = require('botbuilder')
const dialog = require('./luis.js')
const anime_search = require('./anilist/search.js')

// Add intent handlers
dialog.matches('Init', [
    session => session.send("Okaeri! Nice to see you again senpai. Why don't you ask for current season animes, quotes, jokes or just tell me animes you like?")
])

dialog.matches('Greeting', [
    session => {
        const text = "Please, don't say this in front of the others..."
        const img = 'https://github.com/jieverson/waifubot/blob/master/pictures/shy.jpg?raw=true'
        const card = new builder.HeroCard(session)
            .text(text)
            .images([
                 builder.CardImage.create(session, img)
            ])
        const msg = new builder.Message(session).attachments([card])
        session.send(msg)
    }
])

dialog.matches('LikeAnime', [
    (session, args) => {
        if(args && args.entities && args.entities.length > 0){
            const name = args.entities[0].entity
            anime_search.find(name).then(anime => {
                session.send("Cool! I like '%s' too.", name /*anime.title_english*/)
            })
        }
        else{
            session.send("I'm so happy you like animes like me")
        }
    }
])

dialog.matches('CurrentSeasonAnimes', [
    session => session.send('Not implemented yet. But I will work hard on it senpai!')
])

dialog.matches('Quote', [
    (session, args) => {
        session.send("Developers say they are lazy to crawler a quote's website just to make you happy.")
    }
])

dialog.matches('TellJoke', [
    session => session.send('How does Hei like his coffee? Darker Than Black :)')
])

// No intent match
dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. Say Hello."))

module.exports = dialog