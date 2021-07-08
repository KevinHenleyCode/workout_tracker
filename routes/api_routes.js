const router = require('express').Router()
const { Exercise, Workout }  = require('../models')

router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/api/workouts', (req,res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: '$exercises.duration'},
            totalWeight: {$sum: '$exercises.weight'}
        }
    }])
    .then(results => {res.json(results)})
    .catch(error => {console.log(error)})
})


module.exports = router