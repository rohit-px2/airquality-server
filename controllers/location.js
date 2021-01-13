const locationRouter = require('express').Router()
const axios = require('axios')

const baseUrl = "http://ip-api.com/json"

locationRouter.get('/', async (request, response) => {
	console.log(request)
	const ip = request.headers['x-forwarded-for']
	console.log(ip)
	const locationJSON = await axios.get(`${baseUrl}/${ip}`)
	const location =  {
		country: locationJSON.data.country,
		city: locationJSON.data.city
	}
	console.log("Location is\n", location)
	response.status(200).json(location)
})

module.exports = locationRouter