module.exports = function(app) {
    var route_user = require('../routes/route_user')
    
    app.use('/api', route_user)
}
