//Initial conection database
module.exports = function(mongoose){
    var config = require('./settings')
    mongoose.connect(config.mongodb.server+'/'+config.mongodb.database,{useNewUrlParser: true},function(err){
        if(err) console.log('no se conecto son mongo')
        else console.log('Conexion exitosa')
    })
}
