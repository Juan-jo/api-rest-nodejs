var querys = require('../database/querys')
var foo = require('../models/foo')

function create(req, res) {

}

function update(req, res) {

}

function get(req, res) {
    var cursor = foo.find({})
    
    cursor.find(function(err, collection){
        console.log('coll', collection)
    })

    res.status(200).json({message: 'Holis'})
    //querys.get(foo, res)
}

function find(req, res) {

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