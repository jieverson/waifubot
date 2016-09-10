const builder = require('botbuilder')
const dialog = require('../luis.js')

dialog.matches('Greeting', [
    session => {
        session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/shy.jpg?raw=true')
        session.send("Please, don't say this in front of the others...")
    }
])