const FormData = require('form-data')
const fetch = require('node-fetch')
const base = require('./base.js')

const clientId = process.env.ANILIST_CLIENT_ID || 'YOUR_CLIENT_ID'
const clientSecret = process.env.ANILIST_CLIENT_SECRET || 'YOUR_CLIENT_SECRET'

module.exports = {
    get_token: () => new Promise((resolve, reject) => {
        const auth_url = 'auth/access_token'
        const data = new FormData()
        data.append('grant_type', 'client_credentials')
        data.append('client_id', clientId)
        data.append('client_secret', clientSecret)
        fetch(base.url + auth_url, { 
            method: 'post',
            body: data
        })
        .then(response => response.json())
        .then(data => resolve(data.access_token))
        .catch(err => {
            console.log(err)
        })
    })
}