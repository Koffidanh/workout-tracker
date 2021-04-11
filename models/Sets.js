const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SetsSchema = new Schema({
  sets: INTEGER,
 });

const Sets = mongoose.model("Sets", SetsSchema);

module.exports = Sets;
