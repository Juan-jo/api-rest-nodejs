var mongoose = require('mongoose')
var config = require('./settings')
var foo = require('../models/foo')
function get(model, res){
    
    mongoose.connect(config.mongodb.server+'/'+config.mongodb.database,function(err){
        if(err){
            res.status(500).json({message:'Error 500'})
        }
        var query = foo.find();
        var promise = query.exec();
        promise.addBack(function (err, docs) {});
        console.log('doc', docs)
        
        res.status(200).json({message: 'Hola'})
        mongoose.disconnect();
    })
}



module.exports = {
    get:get
}


