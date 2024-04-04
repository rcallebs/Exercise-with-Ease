const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout.js");

const index = async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    res.render("exercises/index", { exercises });
  } catch (err) {
    console.log(err);
  }
};

async function addToWorkout (req, res) {
  const workout = await Workout.findById(req.params.id);
  workout.exercises.push(req.body.exerciseId);
  await workout.save();

}

async function newExercise(req, res) {
  const exercises = await Exercise.find({}).sort('type');
  res.render("exercises/new", { title: "Add Exercise", errorMsg: "" });
}

const create = async (req, res) => {
  try {
    await Exercise.create(req.body);
    res.redirect("/exercises");
  } catch (err) {
    console.log(err);
    res.render("workouts/new", { errorMsg: err.message });
  }
};

module.exports = {
  index,
  new: newExercise,
  create,
  addToWorkout,
};
