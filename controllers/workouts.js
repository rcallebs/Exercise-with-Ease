const Workout = require('../models/workout.js')

const index = (req, res) => {
    res.render('workouts/index', {
    })
}

const show = (req, res) => {
    res.render('workouts/show'), {
        
    }
}

module.exports = {
    index,
    show,
}