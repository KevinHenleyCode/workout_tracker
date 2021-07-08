const mongoose = require('mongoose')


const workout = mongoose.Schema ({
    type: {
        type: String,
        required: true
    },
})

module.exports = exerciseModle