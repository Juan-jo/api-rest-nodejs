var dbFunctions = require('../database/functions')

function create(req, res) {

}

function update(req, res) {

}

function get(req, res) {
    dbFunctions.methodGetProd()
        .then(function() {

        })
        .catch(function() {

        })
        
    //dbFunctions.getUser('', res)
    //res.status(200).json(users)
}

function find(req, res) {
    var id = req.params.id
    let user = users.find(el => el.id == id)

    if(user == undefined)
	    res.status(500).send({error: 'Usuario no encontrado'})
    else
	    res.status(200).send(user)
}

function deleter(res, req) {

}

module.exports = {
    create: create,
    update: update,
    get: get,
    find: find,
    delete: deleter
}