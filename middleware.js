module.exports = function (req, res, next) {
	var tokenlib = require('./libs/auth')
	let token = ''

	tokenlib.verifyJWT(token)
		.then(function(data) {
			next()
		})
		.catch(function(err) {
			res.status(404).json({mensaje:'Error 404'})
		})
}