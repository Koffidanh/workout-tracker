const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: [
    {
      type: Schema.Types.ObjectId,
      ref: "Type"
    }
  ],
  name: [
    {
      type: Schema.Types.ObjectId,
      ref: "Name"
    }
  ],
  duration: [
    {
      type: Schema.Types.ObjectId,
      ref: "Duration"
    }
  ],
  weight: [
    {
      type: Schema.Types.ObjectId,
      ref: "Weight"
    }
  ],
  reps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reps"
    }
  ],
  sets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sets"
    }
  ],
  distance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Distance"
    }
  ],
});

const Library = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
