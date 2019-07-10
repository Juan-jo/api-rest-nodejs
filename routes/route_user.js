var express     = require('express'),
    route       = express.Router(),
    controller  = require('../controller/controller_user')
    
//route.all('*', require('../middleware'))

route.get('/user', controller.get)
route.get('/user/:id', require('../middleware'), controller.find)
route.post('/user', controller.create)
route.put('/user', controller.update)
route.delete('/user/:id', controller.delete)

module.exports = route