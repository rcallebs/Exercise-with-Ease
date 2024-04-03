const Workout = require("../models/workout.js");

const index = async (req, res) => {
  try {
    const workouts = await Workout.find({}).populate('user');
    // console.log(workouts);
    res.render("workouts/index", {workouts});
  } catch (err) {
    console.log(err);
  }
};

const show = (req, res) => {
  res.render("workouts/show"), {};
};

function newWorkout(req, res) {
  res.render("workouts/new", { title: "Add Exercise", errorMsg: "" });
}

const create = async (req, res) => {
  req.body.user = req.user;
  try {
    await Workout.create(req.body);
    res.redirect("/workouts",);
  } catch (err) {
    console.log(err);
    res.render("workouts/new", { errorMsg: err.message });
  }
};


module.exports = {
    new: newWorkout,
    create,
    index,
    show,
   
};
