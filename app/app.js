module.exports = function(app){
    var user_route = require('../routes/route_user')
    
    app.use('/api', user_route)
}
