const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.post("/", async (request, response) => {
	try {
		const body = request.body
		const saltRounds = 10
		const passwordHash = await bcrypt.hash(body.password, saltRounds)
		const user = new User({
			username: body.username,
			passwordHash,
			locations: []
		})
		const savedUser = await user.save()
		response.json(savedUser)
	}
	catch (error) {
		response.status(500).send({ error: "Could not save user"})
	}
})

usersRouter.post("/location", async (request, response) => {
	try{
		const body = request.body
		const location = {
			country: body.country,
			city: body.city,
		}
		
	}
	catch (error) {
		response.status(500).send({error: "Could not save note"})
	}
})
module.exports = usersRouter