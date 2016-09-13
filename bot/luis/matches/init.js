const dialog = require('../luis.js')

dialog.matches('Init', [
    session => session.send("Okaeri! Nice to see you again senpai. Why don't you ask for current season animes, quotes, jokes or just tell me animes you like?")
])