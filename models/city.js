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
	stats: Array
})

citySchema.plugin(uniqueValidator)

citySchema.set('toJSON', {
	transform: (document, returnedObject) => {
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const City = mongoose.model('City', citySchema)

module.exports = City