const fs = require("fs")
const dialog = require('./luis.js')

fs.readdirSync('bot/luis/matches').forEach(file => require('./matches/' + file))

module.exports = dialog