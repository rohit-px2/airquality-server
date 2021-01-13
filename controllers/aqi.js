const aqiRouter = require('express').Router()
const axios = require('axios')
const City = require('../models/city')
const config = require('../utils/config')

const baseUrl = 'https://api.waqi.info/feed'


async function getInfo(city) {
	const response = await axios.get(`${baseUrl}/${city}/?token=${config.API_KEY}`)
	return response
}


function getDate() {
	const d = new Date()
	const d1 = d.toISOString()
	const d2 = d1.split("T")
	const d3 = d2[0]
	return d3
}


function parseCity(country, city, info) {
	const statistics = Object.keys(info.iaqi).map(key => {
		return {
			[key]: info.iaqi[key]
		}
	})
	// parses the raw object from the API into the City model.
	return new City({
		day: getDate(),
		city,
		country,
		aqi: info.aqi,
		stats: statistics
	})
}


aqiRouter.get("/:country/:city", async (request, response) => {
	const country = request.params.country
	const city = request.params.city
	const dbInfo = await City.findOne({
		day: getDate(),
		city,
		country,
	})
	if (dbInfo) {
		console.log("Received information from MongoDB database")
		response.status(200).json(dbInfo)
	}
	else {
		try {
			const reqInfo = await getInfo(city)
			console.log("Received info from API")
			console.log(reqInfo)
			// Fit this into our City data structure
			const cityObj = parseCity(country, city, reqInfo.data.data)
			await cityObj.save()
			response.status(200).json(cityObj)
		}
		catch (error) {
			console.error("An error occurred", error)
			response.status(404).send({
				error: 'Resource not found'
			})
		}
	}
})

module.exports = aqiRouter