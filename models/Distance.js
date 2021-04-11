const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DistanceSchema = new Schema({
  distance: INTEGER,
 });

const Distance = mongoose.model("Distance", DistanceSchema);

module.exports = Distance;
