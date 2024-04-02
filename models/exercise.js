const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const exerciseSchema = new mongoose.Schema({
      name: { type: String, required: true },
      type: { type: String, required: true },
      muscleTarget: { type: String, required: true },
    }, {
  timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema);