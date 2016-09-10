const dialog = require('../luis.js')

dialog.matches('Quote', [
    (session, args) => {
        session.send("Developers say they are lazy to crawler a quote's website just to make you happy.")
    }
])