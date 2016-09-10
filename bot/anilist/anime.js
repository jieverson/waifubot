const search = require('./search.js')

module.exports = {
    find: name => new Promise((resolve, reject) => {
        search.find(name, 'anime')
            .then(anime => resolve(anime))
            .catch(err => reject(err))
    })
}