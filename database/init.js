//Initial conection database
module.exports = function(mongoose){
    var config = require('./settings')
    /*mongoose.connect(config.mongodb.server+'/'+config.mongodb.database,{useNewUrlParser: true},function(err, db ){
        if(err) console.log('no se conecto son mongo')
        else {
            console.log('Conexion exitosa', x) 
            var foo = db.getCollection('foo')
            var cursor = foo.find()
            cursor.count(function(err, collection){
                cursor.find(function(err, data){
                    console.log('data:', data);
                    
                })
            })
        }
    })*/
}
