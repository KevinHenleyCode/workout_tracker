const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const logger = require('morgan')
const db = require('./models')

const PORT = process.env.PORT || 3001

// middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(require('./routes/api_routes'))
app.use(require('./routes/html_routes'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true})


app.listen(PORT, () => console.log(`Server has started on Port: ${PORT}`))
