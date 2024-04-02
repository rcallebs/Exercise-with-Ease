var express = require("express");
var router = express.Router();
const workoutsCtrl = require("../controllers/workouts");

// all actual paths start with "/workouts"

//GET /workouts
router.get("/", workoutsCtrl.index);
// //GET /workouts/new !define before show route!
router.get('/new', workoutsCtrl.new)
// //GET /workouts/:id
router.get('/', workoutsCtrl.show)
// POST /workouts
router.post('/', workoutsCtrl.create)
// DELETE /workouts/:id
// router.delete('/:id', workoutsCtrl.delete)

module.exports = router;
