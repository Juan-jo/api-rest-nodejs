var express = require('express')
var api = express.Router()
var users = [
    {id: 1, nombre: 'Juan Jose', num_eployed: 20123, puesto:'SQL Dev', perfil: 'Ing'}, 
    {id: 2, nombre: 'Eduardo', num_eployed: 24123, puesto:'Dev c#', perfil: 'Ing'},
    {id: 3, nombre: 'Felix Hdez', num_eployed: 20933, puesto:'Sap Cons', perfil: 'lic'}, 
    {id: 4, nombre: 'Ronaldo Nazario', num_eployed: 20123, puesto:'DBA', perfil: 'Ing'},
    {id: 5, nombre: 'Leonel Messi', num_eployed: 28373, puesto:'Dev Python', perfil: 'Doc'},
    {id: 6, nombre: 'Zinedin', num_eployed: 22333, puesto:'', perfil: ''},
    {id: 7, nombre: 'Jeol Vega', num_eployed: 97675, puesto:'', perfil: ''},
    {id: 8, nombre: 'Perla ', num_eployed: 20237, puesto:'', perfil: ''},
    {id: 9, nombre: 'Alfahir', num_eployed: 20222, puesto:'', perfil: ''},
   {id: 10, nombre: 'Ricardo', num_eployed: 93233, puesto:'', perfil: ''}]

api.route('/user')
.get(function(req, res) {
    res.status(200).send(users)
}).
post(function(req, res) {
    var params = req
    console.log(params)

    users.push({
        id: params.id,
	nombre: params.nombre,
	num_eployed: params.num_eployed,
	puesto: params.puesto,
	perfil: params.perfil
    })    
    res.status(200).send({msg: 'user agregado'})
}).
put(function(req, res) {
    res.send('Update user')
})

api.get('/user/:userId', function(req, res){
    var id = req.params.userId
    let user = users.find(el => el.id == id)

    if(user == undefined)
	res.status(501).send({error: 'Usuario no encontrado'})
    else
	res.status(200).send(user)
})

module.exports = api
