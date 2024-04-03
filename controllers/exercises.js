const Exercise = require('../models/exercise.js')

const index = async (req, res) => {
    try {
      const exercises = await Exercise.find({}).populate('user');
      console.log(exercises);
      res.render("exercises/index", {exercises});
    } catch (err) {
      console.log(err);
    }
  };

async function show (req, res)  {
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