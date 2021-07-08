const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const morgan = require('morgan')
const db = require('./models')

const PORT = process.env.PORT || 3001

// middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_tracker', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true})
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
)

app.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'stats.html'))
)

app.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'))
)




app.listen(PORT, () => console.log(`Server has started on Port: ${PORT}`))
