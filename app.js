const config = require('./utils/config')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const aqiRouter = require('./controllers/aqi')

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex:true})
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch(error => {
		console.error("An error occurred:", error)
	})

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use("/api/info", aqiRouter)

module.exports = app