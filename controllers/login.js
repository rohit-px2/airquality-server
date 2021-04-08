const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../utils/config')
const oneDay = 24 * 60 * 60 * 1000

loginRouter.post("/", async (request, response) => {
	const signOptions = {
		expiresIn: '1d'
	}
	const body = request.body
	const user = await User.findOne({username: body.username})
	const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)
	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: "invalid username or password"
		})
	}
	const userForToken = {
		username: user.username,
		id: user._id,
	}
	const token = jwt.sign(userForToken, config.SECRET, signOptions)
	response
		.status(200)
		.cookie('token', token, {
			httpOnly: true,
			maxAge: oneDay
		})
		.send({username: user.username, locations: user.locations})
})

module.exports = loginRouter
