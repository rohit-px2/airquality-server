const locationRouter = require('express').Router()
const axios = require('axios')

const baseUrl = "http://ip-api.com/json"

locationRouter.get('/', async (request, response) => {
	const ip = request.ip.replace('::ffff:', '')
	console.log(ip)
	const locationJSON = await axios.get(`${baseUrl}`)
	const location =  {
		country: locationJSON.data.country,
		city: locationJSON.data.city
	}
	console.log("Location is\n", location)
	response.status(200).json(location)
})

module.exports = locationRouter