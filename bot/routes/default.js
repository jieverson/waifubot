const builder = require('botbuilder')
const dialog = require('../luis.js')

dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. Say Hello."))