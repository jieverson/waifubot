const fetch = require('node-fetch')
const auth = require('./auth.js')
const base_uri = require('./api-uri.js')

module.exports = {
    find: (name, entity) => new Promise((resolve, reject) => {
        auth.get_token().then(token => {
            const route = entity + '/search/'
            const q = '?access_token='
            let uri = base_uri + route + name + q + token
            fetch(uri)
            .then(response => response.json())
            .then(data => data[0])
            .then(item => resolve(item))
            .catch(err => reject(err))
        })
        .catch(err => reject(err))
    })
}