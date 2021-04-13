const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DurationSchema = new Schema({
  duration: Number,
 });

const Duration = mongoose.model("Duration", DurationSchema);

module.exports = Duration;
