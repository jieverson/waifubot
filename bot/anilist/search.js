const fetch = require('node-fetch')
const auth = require('./auth.js')

module.exports = {
    find: name => new Promise((resolve, reject) => {
        auth.get_token().then(token => {
            // TODO: Get anime
            resolve(name)
        })
    })
} 