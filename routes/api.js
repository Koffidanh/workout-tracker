let db = require("../models");
module.exports = function(app) {
  //
app.get("/api/workouts", ({ body }, res) => {
  db.Workout.find(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    
});
//
app.post("/api/workouts/:id", (req, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//
app.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
};



