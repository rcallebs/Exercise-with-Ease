var express = require("express");
var router = express.Router();
const exerciseCtrl = require("../controllers/exercises");

// all actual paths start with "/workouts"

//GET /workouts
router.get("/", exerciseCtrl.index);
// //GET /workouts/new !define before show route!
router.get('/new', exerciseCtrl.new)
// //GET /workouts/:id
// router.get('/', workoutsCtrl.show)
// POST /todos
// router.post('/', workoutsCtrl.create)
// DELETE /workouts/:id
// router.delete('/:id', workoutsCtrl.delete)

module.exports = router;