const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NameSchema = new Schema({
  Name: String,
 });

const Name = mongoose.model("Name", NameSchema);

module.exports = Name;

