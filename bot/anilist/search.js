const fetch = require('node-fetch')
const auth = require('./auth.js')
const base_uri = require('./api-uri.js')

module.exports = {
    find: name => new Promise((resolve, reject) => {
        auth.get_token().then(token => {
            const url = 'anime/search/'
            const q = '?access_token='
            fetch(base_uri + url + name + q + token)
            .then(response => response.json())
            .then(data => data[0])
            .then(anime => resolve(anime))
        })
    })
} 