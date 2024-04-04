// const Workout = require("../models/workout.js");
// const Exercise = require("../models/exercise.js")

// const index = async (req, res) => {
//   try {
//     const workouts = await Workout.find({}).populate('user');
//     res.render("workouts/index", {workouts});
//   } catch (err) {
//     console.log(err);
//   }
// };

// const show = async (req, res) => {
//   try {
//     const workout = await Workout.findById(req.params.id);
//     res.render(`workouts/show`, { workout });
//   } catch (err) {
//     console.log(err);
//     res.redirect('workouts/')
//   
// };

//  const newWorkout = async (req, res) => {
//   const exercises = await Exercise.find({});
//   res.render("workouts/new", { title: "Add Exercise", errorMsg: "", exercises });
// }

// const create = async (req, res) => {
//   req.body.user = req.user;
//   try {
//     console.log(req.body);
//     await Workout.create(req.body);
//     res.redirect("/workouts",);
//   } catch (err) {
//     console.log(err);
//     res.render("workouts/new", { errorMsg: err.message });
//   }
// };


// module.exports = {
//     new: newWorkout,
//     create,
//     index,
//     show,
// };
