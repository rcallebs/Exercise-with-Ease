const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
      type: { type: String, required: true },
      name: { type: String, required: true },
      weight: { type: Number, default: 0 },
      sets: { type: Number, default: 0 },
      reps: { type: Number, default: 0 },
      duration: { type: Number, default: 0 },
      date: { type: Date, default: Date.now }
    }, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);