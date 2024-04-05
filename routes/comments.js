const express = require('express');
const router = express.Router();
const commentRouter = require('../controllers/comments');
// Require the auth middleware
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /workouts/:id/reviews (create review for a movie)
router.post('/workouts/:id/comments', commentRouter.create);
//DELETE /reviews
router.delete('/comments/:id', commentRouter.delete);

module.exports = router;