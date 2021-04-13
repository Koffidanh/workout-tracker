const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepsSchema = new Schema({
  reps: Number,
 });

const Reps = mongoose.model("Reps", RepsSchema);

module.exports = Reps;
