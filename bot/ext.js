const builder = require('botbuilder')
const router = require('./router.js')

builder.Session.prototype.sendImg = function(img) {
    let self = this
    let card = new builder.HeroCard(self)
        .images([
             builder.CardImage.create(self, img)
        ])
    let msg = new builder.Message(self).attachments([card])
    self.send(msg)
}