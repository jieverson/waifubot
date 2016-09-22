describe('anilist', function(){
    describe('auth', function(){
        it('get_token should return a valid token', function(done){
            const token = 'hAUDHUASHDuahDUAHSUDAsaagd'
            
            const fetch = sinon.stub()
            fetch.returns(new Promise(resolve => resolve({
                json: () => ({
                    access_token: token
                })
            })))
            
            require_subvert.subvert('node-fetch', fetch)
            const auth = require_subvert
                .require('../bot/anilist/auth')            
            
            auth.get_token()
                .then(x => x.should.equal(token))
                .then(x => done())
                .catch(done)
        })

        after(function(){
            require_subvert.cleanUp()
        })
    })
})