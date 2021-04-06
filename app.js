const config = require('./utils/config')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const aqiRouter = require('./controllers/aqi')
const locationRouter = require('./controllers/location')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const path = require('path')
mongoose
  .connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex:true})
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch(error => {
    console.error("An error occurred:", error)
  })

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/info", aqiRouter)
app.use("/api/location", locationRouter)
app.use("/api/login", loginRouter)
app.use("/api/users", usersRouter)
app.use("/", express.static('build'))
app.use("/dashboard", express.static('build'))

module.exports = app
