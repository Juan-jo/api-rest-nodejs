import jwt from 'jsonwebtoken'
import _ from 'lodash'

export function verifyJWTToken(token) {
	return new Promise(function(resolve, reject) {
		jwt.verify(token, process.env.JWT_SECRET, function(err, decodedToken) {
			if(err || !decodedToke) {
				return reject(err)
			}
			resolve(decodedToken)
		})
	})
}

export function createJWTToken(details){
	if(typeof details !== 'object') {
		details = {}
	}
	if(!details.maxAge || typeof details !== 'number'){
		details.maxAge = 3600	
	}

	details.sessionData = _.reduce(details.sessionData || {}, (memo, key, val) => {
		if(typeof val !== 'function' && key !== 'password') {
			memo[key] = val	
		}
		return memo	
	}, {})

	let token = jwt.sign({
		data: sessionData
	}, process.env.JWT_SECRET, {
		expiresIn: details.maxAge,
		algorithm: 'HS256'
	})

	return token
}

export default {
	verifyJWTToken,
	createJWTToken
}
