var express = require('express')
var route = express.Router()
var controller = require('../controller/controller_user')

route.get('/user', controller.get)
route.get('/user/:id', controller.find)
route.post('/user', controller.create)
route.put('/user', controller.update)
route.delete('/user/:id', controller.delete)

module.exports = route

// grupo salinas