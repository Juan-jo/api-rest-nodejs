//Simulator database
var users = require('./db')

function getUser(query, res) {
    methodCallback(query, function(status, lengthUsers, users) {
        if(status === 0)
            res.status(200).json({length:lengthUsers, users:users})
        else
            res.status(500).json({msg:'Error en la base de datos'})
    })
}

function methodCallback(query, callback) {
    var lengthUsers = users.length
    //  ... conection server database and execute query
    //  Finally execute callback

    //  0 errores, length, users
    callback(0, lengthUsers, users)
}

function methodGetProd() {
    return new Promise(function(resolve, reject) {
        resolve(true)
    })
}

module.exports = {
    getUser: getUser,
    methodGetProd: methodGetProd
}