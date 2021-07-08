const mongoose = require('mongoose')
const exerciseModel = require('./exerciseModel')


const workoutModel = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ exerciseModel ]
})


const Workout = mongoose.model('Workout', workoutModel)


module.exports = Workout