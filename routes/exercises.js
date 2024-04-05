var express = require("express");
var router = express.Router();
const exerciseCtrl = require("../controllers/exercises");

// all actual paths start with "/exercises"

//GET /workouts
router.get("/", exerciseCtrl.index);
// //GET /workouts/new !define before show route!
router.get("/new", exerciseCtrl.new);
// POST /todos
router.post("/", exerciseCtrl.create);
// DELETE /workouts/:id
// router.delete('/:id', exerciseCtrl.delete)
//GET /filter/:filterParam
router.get('/filter/:filterParam', exerciseCtrl.filterParam);
//POST /filter
router.post('/filter', exerciseCtrl.filtered);

module.exports = router;
