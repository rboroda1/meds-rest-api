const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

// Read the config from the .env files
require("dotenv").config();

//set up express app
const app = express();

//connect to mongodb
mongoose.connect(
  "mongodb+srv://rachelboroda:rboroda1234@chop-boroda-app.vp6kb.mongodb.net/medications",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
mongoose.Promise = global.Promise;

//middleware
//if user requests static file
app.use(express.static("public"));

//use bodyParser middleware
app.use(express.json());

// cors
app.use(cors());

//initialize routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});
//end of middleware

//listen for requests
app.listen(process.env.PORT || 4000, function () {
  console.log("now listening for requests");
});
