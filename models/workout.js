const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    muscleTarget: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const workoutSchema = new Schema(
  {
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    muscleGroup: { type: String },
    cardio: { type: Boolean, default: false },
    intensity: { type: String, default: "Moderate" },
    time: { type: String, enum: ["Morning", "Midday", "Afternoon", "Night"] },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
      exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
      }],
    },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
