const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  weight: INTEGER,
 });

const Weight = mongoose.model("Weight", WeightSchema);

module.exports = Weight;
