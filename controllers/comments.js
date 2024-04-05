const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout.js");

async function create(req, res) {
  const workout = await Workout.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  workout.comments.push(req.body);
  try {
    await workout.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/workouts/${workout._id}`);
}

async function deleteReview(req, res) {
    const workout = await Workout.findOne({
      "comments._id": req.params.id,
      "comments.user": req.user._id,
    });
    if (!workout) return res.redirect("/workouts");
    workout.comments.remove(req.params.id);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
  }

module.exports = {
  create,
  delete: deleteReview,
};
