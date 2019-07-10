var tokenlib = require('./libs/auth')

function verifyJWT_MW(req, res, next) {
	let token = ''
	
	tokenlib.verifyJWT(token)
		.then(function(data) {
			next()
		})
		.catch(function(err) {
			res.status(404).json({mensaje:'Error 404'})
		})
}

module.exports = {
	verifyJWT_MW: verifyJWT_MW
}