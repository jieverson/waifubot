const dialog = require('../luis.js')
const text_analytics = require('../../text-analytics')

dialog.onDefault([
    session => text_analytics.sentiment(session.message.text, session)
])