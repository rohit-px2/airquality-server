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


async function parseCity(country, info) {
	// parses the raw object from the API into the City model.
	return new City({
		day: getDate(),
		city: info.city.name,
		country,
		aqi: info.aqi,
		no2: info.iaqi.no2.v,
		o3: info.iaqi.o3.v,
		pm25: info.iaqi.pm25.v,
		so2: info.iaqi.so2.v,
	})
}


aqiRouter.get("/:country/:city", async (request, response) => {
	const country = request.params.country
	const city = request.params.city
	console.log(city)
	console.log(country)
	const dbInfo = await City.findOne({
		country,
		city,
		day: getDate()
	})
	if (dbInfo) {
		console.log("Received information from MongoDB database")
		response.status(200).json(dbInfo)
	}
	else {
		try{
			const reqInfo = await getInfo(city)
			console.log("RECEIVED INFO")
			// Fit this into our City data structure
			const cityObj = await parseCity(country, reqInfo.data.data)
			await cityObj.save()
			response.status(200).json(cityObj)
		}
		catch (error) {
			response.status(404).send()
		}
	}
})

module.exports = aqiRouter