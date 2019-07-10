//import jwt from 'jsonwebtoken'

//Verifica si existe token
function verifyJWT(token){
	return new Promise(function(resolve, reject) {
		resolve(true)
	})
}

//Crear token
function createJWT(jsonDetails) {
	let token = '7327723678dlkd'

	return token
}

module.exports = {
	verifyJWT: verifyJWT,
	createJWT: createJWT
}