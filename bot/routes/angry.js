const builder = require('botbuilder')
const dialog = require('../luis.js')

dialog.matches('Angry', [
    session => {
        const text = "Shut up, you MONGREL!"
        const img = 'https://github.com/jieverson/waifubot/blob/master/pictures/angry.jpg?raw=true'
        const card = new builder.HeroCard(session)
            .text(text)
            .images([
                 builder.CardImage.create(session, img)
            ])
        const msg = new builder.Message(session).attachments([card])
        session.send(msg)
    }
])