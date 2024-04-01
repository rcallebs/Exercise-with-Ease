const Workout = require('../models/workout.js')

const index = (req, res) => {
    res.render('workouts/index', {
        workouts: Workout.getAll()
    })
}

module.exports = {
    index,
}