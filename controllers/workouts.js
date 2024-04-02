const Workout = require('../models/workout.js')

const index = (req, res) => {
    res.render('workouts/index', { title: 'Workout Schedules'})
}

async function show (req, res) {
    res.render('workouts/show'), {
        
    }
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Add Exercise', errorMsg: ''});
}

module.exports = {
    index,
    show,
    new: newWorkout,
}