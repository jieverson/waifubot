const fetch = require('node-fetch')
const auth = require('./auth.js')
const base = require('./base.js')

module.exports = {
    find: name => new Promise((resolve, reject) => {
        auth.get_token().then(token => {
            const url = 'anime/search/'
            const q = '?access_token='
            fetch(base.url + url + name + q + token)
            .then(response => response.json())
            .then(data => data[0])
            .then(anime => resolve(anime))
        })
    })
} 