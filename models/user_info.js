var mogoose = require('mongoose')
const Shema = mogoose.Schema

const user_info = Shema({
    user_name: String,
    email: String,
    photo: String,
    movil: String
})

module.exports = mogoose.model('user_info', user_info)