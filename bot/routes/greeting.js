const builder = require('botbuilder')
const dialog = require('../luis.js')

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