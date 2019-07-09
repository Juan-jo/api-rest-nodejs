import { verifyJWTToken } from './libs/auth'

export function verifyJWT_MW(req, res, next) {
	let token = ""
	
	verifyJWTToken(token)
		.then(() => {
			
			next()
		})
		.catch((err) => {
			res.status(400).json({mensaje: 'Json Invalido'})
		})
}
