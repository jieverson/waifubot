const builder = require('botbuilder')
const dialog = require('../luis.js')
const anime_search = require('../anilist/anime.js')
const character_search = require('../anilist/character.js')

dialog.matches('LikeAnime', [
    (session, args) => {
        if(args && args.entities && args.entities.length > 0){
            let name = args.entities[0].entity
            anime_search.find(name).then(anime => {
                session.send(anime.title_english)
                if(anime.image_url_banner) {
                    session.sendImg(anime.image_url_banner)
                }
                session.send(anime.description.substr(0, 150) + '...')
            }).catch(err => {
                character_search.find(name).then(character => {
                    session.send(character.name_last + ' ' + character.name_first)
                    if(character.name_alt){
                        session.send('Also known as ' + character.name_alt)
                    }
                    if(character.image_url_lge){
                        session.sendImg(character.image_url_lge)
                    }
                    session.send(character.info.substr(0, 150) + '...')
                })
                .catch(err => {
                    session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/thinking.jpg?raw=true')
                    session.send("Sorry, I don't know anything about " + name)
                })
            })
        }
        else{
            session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/like.jpg?raw=true')
            session.send("I'm so happy you like animes like me")
        }
    }
])