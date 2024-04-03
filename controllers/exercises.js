const Exercise = require("../models/exercise.js");

const index = async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    console.log(exercises);
    res.render("exercises/index", { exercises });
  } catch (err) {
    console.log(err);
  }
};

async function show(req, res) {
  res.render("exercises/show"), {};
}

function newExercise(req, res) {
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
  show,
  new: newExercise,
  create,
};
