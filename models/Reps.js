const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepsSchema = new Schema({
  reps: INTEGER,
 });

const Reps = mongoose.model("Reps", RepsSchema);

module.exports = Reps;
