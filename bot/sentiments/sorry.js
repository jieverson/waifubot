module.exports = {
    send: session => {
        session.sendImg('https://github.com/jieverson/waifubot/blob/master/pictures/sorry.png?raw=true')
        session.send("Sorry...")
    }
}