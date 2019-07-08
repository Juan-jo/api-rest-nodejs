var express = require('express')
var api = express.Router()
var user = [
    {id: 1, nombre: 'JuanJose'},
    {id: 2, nombre: 'Felix'},
    {id: 3, nombre: 'Rolis'}]

api.route('/user')
.get(function(req, res) {
    res.send(200, user)
}).
post(function(req, res) {
    res.send('add user')
}).
put(function(req, res) {
    res.send('Update user')
})

api.get('/user/:userId', function(req, res){
    var id = req.params.userId
    console.log('id: ',id)
    res.send(200, user.find())
})

module.exports = api
