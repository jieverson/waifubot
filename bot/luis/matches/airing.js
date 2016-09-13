const dialog = require('../luis.js')
const airing = require('../../anilist/airing')

dialog.matches('CurrentSeasonAnimes', [
    session => {
        airing.get().then(animes => {
            session.send('Current season animes are: ')
            animes = animes.map(x => '- ' + x)
            animes = animes.reduce((p,c,i) => {
                if(i % 10 == 0)
                    p.push([])
                p[p.length - 1].push(c)
                return p
            }, [])
            animes.forEach(x => session.send(x.join('\n')))
            session.send('Senpai wanna talk about some of them?')
        })
    }
])