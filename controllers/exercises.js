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

async function addToWorkout(req, res) {
  try {
    const workout = await Workout.findById(req.params.id);
    workout.exercises.push(req.body.exerciseId);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
  } catch (err) {
    console.log(err);
    res.render('exercises', { errorMsg: "Not adding exercise to workout"});
  }
}

async function newExercise(req, res) {
  const exercises = await Exercise.find({}).sort("type");
  res.render("exercises/new", { title: "Add Exercise", exercises, errorMsg: "" });
}

const create = async (req, res) => {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
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
