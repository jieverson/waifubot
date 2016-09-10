const dialog = require('../luis.js')

dialog.matches('CurrentSeasonAnimes', [
    session => session.send('Not implemented yet. But I will work hard on it senpai!')
])