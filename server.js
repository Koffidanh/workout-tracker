const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://DB_USER:DB_PASS@cluster0.4tjku.mongodb.net/workout?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
