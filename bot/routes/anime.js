const builder = require('botbuilder')
const dialog = require('../luis.js')
const anime_search = require('../anilist/search.js')

dialog.matches('LikeAnime', [
    (session, args) => {
        if(args && args.entities && args.entities.length > 0){
            const name = args.entities[0].entity
            anime_search.find(name).then(anime => {
                session.send("Cool! Let's talk about %s.", anime.title_english)
                if(anime.image_url_banner) {
                    session.sendImg(anime.image_url_banner)
                }
                session.send(anime.description.substr(0, 100) + '...')
            }).catch(err => {
                session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/thinking.jpg?raw=true')
                session.send("Sorry, I don't know anything about " + name)
            })
        }
        else{
            session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/like.jpg?raw=true')
            session.send("I'm so happy you like animes like me")
        }
    }
])