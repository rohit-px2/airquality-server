const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const citySchema = new mongoose.Schema({
	day: String,
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	aqi: Number,
	no2: Number,
	o3: Number,
	pm25: Number,
	so2: Number
})

citySchema.plugin(uniqueValidator)

citySchema.set('toJSON', {
	transform: (document, returnedObject) => {
		delete returnedObject._id
	}
})

const City = mongoose.model('City', citySchema)

module.exports = City