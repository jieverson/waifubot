const builder = require('botbuilder')
const dialog = require('../luis.js')

//session.send('Not implemented yet. But I will work hard on it senpai!')

dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. Say Hello."))