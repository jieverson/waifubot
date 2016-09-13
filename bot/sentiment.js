const love = require('./sentiments/love')
const like = require('./sentiments/like')
const sorry = require('./sentiments/sorry')
const hate = require('./sentiments/hate')

module.exports = (score, session) => {
    console.log('Score: ' + score)
    
    if(score > 0.9){
        love.send(session)
    }
    else if(score > 0.65){
        like.send(session)
    }
    else if(score < 0.1){
        hate.send(session)
    }
    else if(score < 0.35){
        sorry.send(session)
    }
    else {
        session.send("I'm sorry I didn't understand. Say Hello.")
    }
}
