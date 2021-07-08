const mongoose = require('mongoose')
const exercise = require('./exerciseModel')



// creates a new workout schema
const workout = new mongoose.Schema ({
    name: {
        type: String
    },
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ exercise ]
})



const Workout = mongoose.model('Workout', workout)
module.exports = Workout