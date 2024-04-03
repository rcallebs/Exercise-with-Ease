const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  muscleTarget: { type: String, required: true },
}, {
timestamps: true
});


const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: { type: String, required: true },
    weight: { type: Number, },
    sets: { type: Number, default: 0 },
    reps: { type: Number, default: 0 },
    duration: { type: String, default: 0 },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
