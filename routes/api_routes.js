const router = require('express').Router()
const { Exercise, Workout }  = require('../models')



// posts the users choices to the datbase
router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {res.json(dbWorkout)})
    .catch(error => {console.log(error)})
})


// gets all of the users workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: { totalDuration: {$sum: '$exercises.duration'}, totalWeight: {$sum: '$exercises.weight'} }}])
    .then(dbWorkout => {res.json(dbWorkout)})
    .catch(error => {console.log(error)})
})


// updates the users workouts
router.put('/api/Workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }})
    .then(dbWorkout => {res.json(dbWorkout)})
    .catch(error => {console.log(`${error} testing put`)})
})


// takes all of the users workouts and adds them together to show their over all progress
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: { totalDuration: {$sum: '$exercises.duration'}, totalWeight: {$sum: '$exercises.weight'} }}])
    .then(dbWorkout => {res.json(dbWorkout)})
    .catch( error => {consol.log(error)})
})



// exports the router
module.exports = router