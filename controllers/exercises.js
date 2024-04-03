const Exercise = require("../models/exercise.js");

const index = async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    res.render("exercises/index", { exercises });
  } catch (err) {
    console.log(err);
  }
};


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
  new: newExercise,
  create,
};
