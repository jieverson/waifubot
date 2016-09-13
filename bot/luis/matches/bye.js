const dialog = require('../luis.js')

dialog.matches('Bye', [
    session => {
        session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/bye.jpg?raw=true')
        session.send("See you later senpai!")
    }
])