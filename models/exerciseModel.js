const mongoose = require('mongoose')



const exerciseModel = new mongoose.Schema ({
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    duration: {
        type: Number
    },

    weight: {
        type: Number
    },

    reps: {
        type: Number
    },

    sets: {
        type: Number
    }
})

module.exports = exerciseModel