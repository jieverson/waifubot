const search = require('./search.js')

module.exports = {
    find: name => new Promise((resolve, reject) => {
        search.find(name, 'character')
            .then(character => resolve(character))
            .catch(err => reject(err))
    })
}