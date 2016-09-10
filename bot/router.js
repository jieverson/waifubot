const fs = require("fs")
const dialog = require('./luis.js')

fs.readdirSync('bot/routes').forEach(file => require('./routes/' + file))

module.exports = dialog