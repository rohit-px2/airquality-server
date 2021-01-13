const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')

function getTokenFrom(request) {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}
	return null
}

usersRouter.post("/", async (request, response) => {
	try {
		const body = request.body
		console.log("Username: ", body.username)
		console.log("Password: ", body.password)
		const saltRounds = 10
		const passwordHash = await bcrypt.hash(body.password, saltRounds)
		const foundUser = await User.findOne({username: body.username})
		if(foundUser !== null) {
			console.log("User tried to sign up a username that already exists")
			return response.status(409).send({error: "User already exists"})
		}
		const user = new User({
			username: body.username,
			passwordHash,
			locations: []
		})
		const savedUser = await user.save()
		console.log("Successful sign up")
		response.json(savedUser)
	}
	catch (error) {
		response.status(500).send({ error: "Could not save user"})
	}
})

usersRouter.post("/location", async (request, response) => {
	try{
		console.log("Someone is adding a location")
		console.log(request)
		const body = request.body
		console.log(request.body)
		const token = getTokenFrom(request)
		console.log(token)
		const decodedToken = jwt.verify(token, config.SECRET)
		console.log(decodedToken)
		if(!token || !decodedToken.id) {
			return response.status(401).json({error: "Token missing or invalid"})
		}
		const user = await User.findById(decodedToken.id)
		console.log(user)
		const location = body
		console.log(location)
		user.locations = user.locations.concat(location)
		await user.save()
		console.log("Successfully saved")
		response.json(location)
	}
	catch (error) {
		console.error("Error occurred: ", error)
		response.status(500).send({error: "Could not save note"})
	}
})
module.exports = usersRouter