const builder = require('botbuilder')
const router = require('./router.js')

builder.Session.prototype.sendImg = function(img) {
    const self = this
    const card = new builder.HeroCard(self)
        .images([
             builder.CardImage.create(self, img)
        ])
    const msg = new builder.Message(self).attachments([card])
    self.send(msg)
}