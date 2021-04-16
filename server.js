const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models")


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
//
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});
//
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});
//
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    // .then(db.Workout.aggregate([{
    //   $addFields:{
    //     totalDuration: {$sum: "$duration"}
    //   }
    // }]))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});
//
app.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//
app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id,
   {$push:{exercises: body}},
   {new:true} )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
