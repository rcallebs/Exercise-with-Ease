const Exercise = require('../models/exercise.js')

const index = (req, res) => {
    res.render('exercises/index', { title: 'Excercise List'})
}

const show = (req, res) => {
    res.render('exercises/show'), {
        
    }
}

function newExercise(req, res) {
    res.render('exercises/new', { title: 'Add Exercise', errorMsg: ''});
}

module.exports = {
    index,
    show,
    new: newExercise,
}