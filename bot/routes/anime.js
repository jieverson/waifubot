const builder = require('botbuilder')
const dialog = require('../luis.js')
const anime_search = require('../anilist/search.js')

dialog.matches('LikeAnime', [
    (session, args) => {
        if(args && args.entities && args.entities.length > 0){
            const name = args.entities[0].entity
            anime_search.find(name).then(anime => {
                session.send("Cool! Let's talk about %s.", anime.title_english)
                const card = new builder.HeroCard(session)
                    .images([
                        builder.CardImage.create(session, anime.image_url_banner)
                    ])
                const msg = new builder.Message(session).attachments([card])
                session.send(msg)
                session.send(anime.description.substr(0, 100) + '...')
            }).catch(err => {
                const img = 'https://github.com/jieverson/waifubot/blob/master/pictures/thinking.jpg?raw=true'
                const card = new builder.HeroCard(session)
                    .images([
                        builder.CardImage.create(session, img)
                    ])
                const msg = new builder.Message(session).attachments([card])
                session.send(msg)
                session.send("Sorry, I don't know anything about " + name)
            })
        }
        else{
            const img = 'https://github.com/jieverson/waifubot/blob/master/pictures/like.jpg?raw=true'
            const card = new builder.HeroCard(session)
                .images([
                    builder.CardImage.create(session,img)
                ])
            const msg = new builder.Message(session).attachments([card])
            session.send(msg)
            session.send("I'm so happy you like animes like me")
        }
    }
])