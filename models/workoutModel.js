const mongoose = require('mongoose')
const exercise = require('./exerciseModel')


const workout = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ exercise ]
})


const Workout = mongoose.model('Workout', workout)


module.exports = Workout