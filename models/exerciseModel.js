const mongoose = require('mongoose')



const exercise = new mongoose.Schema ({
    name: {
        type: String,
        enum: ['resistance', 'cardio'],
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

module.exports = exercise