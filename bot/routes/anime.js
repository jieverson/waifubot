const dialog = require('../luis.js')
const anime_search = require('../anilist/search.js')

dialog.matches('LikeAnime', [
    (session, args) => {
        if(args && args.entities && args.entities.length > 0){
            const name = args.entities[0].entity
            anime_search.find(name).then(anime => {
                //image_url_banner
                //description
                //total_episodes
                session.send("Cool! Let's talk about '%s'.", anime.title_english)
            })
        }
        else{
            session.send("I'm so happy you like animes like me")
        }
    }
])