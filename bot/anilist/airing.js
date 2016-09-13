const fetch = require('node-fetch')
const auth = require('./auth.js')
const base_uri = require('./api-uri.js')

module.exports = {
    get: () => new Promise((resolve, reject) => {
        auth.get_token().then(token => {
            const url = 'browse/anime'
            const status = '?status=Currently Airing&type=TV&full_page=true'
            const sort = '&sort=start_date-desc' 
            const q = '&access_token='
            fetch(base_uri + url + status + sort + q + token)
            .then(response => response.json())
            .then(data => data.map(x => x.title_english))
            .then(animes => resolve(animes))
            .catch(err => reject(err))
        })
        .catch(err => reject(err))
    })
}