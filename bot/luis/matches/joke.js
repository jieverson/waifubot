const dialog = require('../luis.js')

dialog.matches('TellJoke', [
    session => session.send('How does Hei like his coffee? Darker Than Black :)')
])