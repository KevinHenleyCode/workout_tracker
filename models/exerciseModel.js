const mongoose = require('mongoose')



// creates a new exercise schema and has functions making sure that each object is part of either cardio or resistance
const exercise = new mongoose.Schema ({
    type: {
        type: String,
        enum: ['resistance', 'cardio'],
        required: 'You must pick either cardio or resistance.'
    },

    name: String,

    weight: {
        type: Number,
        required: function() {
            this.type === 'resistance'
        }
    },

    sets: {
        type: Number,
        required: function() {
            this.type === 'resistance'
        }
    },
    
    reps: {
        type: Number,
        required: function() {
            this.type === 'resistance'
        }
    },

    duration: {
        type: Number
    },

    distance: {
        type: Number,
        required: function() {
            this.type === 'cardio'
        }
    }
})



module.exports = exercise