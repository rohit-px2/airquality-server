const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../utils/config')

loginRouter.post("/", async (request, response) => {
	const body = request.body
	const user = await User.findOne({username: body.username})
	const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)
	if (!(user && passwordCorrect)) {
		return response.status(401).json({ error: "invalid username or password"})
	}
	const userForToken = {
		username: user.username,
	}
	const token = jwt.sign(userForToken, config.SECRET)
	response
		.status(200)
		.send({token, username: user.username})
})