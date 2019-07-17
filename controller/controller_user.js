var querys = require('../database/querys')
var foo = require('../models/foo')
var user_info = require('../models/user_info')

function create(req, res) {

}

function update(req, res) {

}

function get(req, res) {    
    /*var u = user_info.insertMany([{user_name: 'Felix Gay'}])
    u.then(user => {
        console.log('user: ', user)
    })
    u.catch(err => {
        console.log('catch: ', err)        
    })*/
    
    var cursor = user_info.find()
    
    cursor.count(function(err, collection){
        cursor.find(function(err, data){
            res.status(200).json(data)
        })
    })
    

    //res.status(200).json({message: 'Holis'})
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