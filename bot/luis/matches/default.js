const builder = require('botbuilder')
const dialog = require('../luis.js')
const text_analytics = require('../../text-analytics')

//session.send('Not implemented yet. But I will work hard on it senpai!')

//dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. Say Hello."))

dialog.onDefault([
    session => {
        text_analytics.sentiment('i love you')
            .then(score => {
                session.send('Score: ' + score)
            })
            .catch(err => {
                session.send("I'm sorry I didn't understand. Say Hello.")
            })
    }
])