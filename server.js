const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/api");
require("dotenv").config();

//Define Port
const port = process.env.PORT || 5000;

//express middleware: necessary to receive and process info from the frontend to the back end.
//1. parses front end data as a string
app.use(express.urlencoded({ extended: true }));
//2. parses front end objects
app.use(express.json());

//Helps with processing routes from front end for Heroku
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
}

//connect to mongo db database
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mars_rover", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Connected to Mongo Database: mars_rover");
    },
    (err) => {
      console.log("Error connecting to Database: ", err);
    }
  );

//mongoose promise is depricated, we overide it with nodes's promise
mongoose.Promise = global.Promise;

//connect routes
app.use("/api", routes);

//Start the api server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
