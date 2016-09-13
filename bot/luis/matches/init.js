const dialog = require('../luis.js')

dialog.matches('Init', [
    session => session.send("Okaeri! Nice to see you again senpai. Let's talk about your favorite animes or characters. I can also tell you the current season animes. If you are cool, I can tell you some quotes or jokes too.")
])