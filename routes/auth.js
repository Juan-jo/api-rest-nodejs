var express     = require('express'),
    tokenlib    = require('../libs/auth'),
    middleware  = require('../middleware')

const router = express.Router()

//router.post('*', middleware.verifyJWT_MW['email', 'password'])

router.post('/login', function(req, res) {
    res.status(200).json({
        success: true,
        token: tokenlib.createJWT({
            user: 'Juan', maxAge: 3600
        })
    })
})
