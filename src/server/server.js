const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://talkiechatapp:Rumkaw-8xiwna-fomjuw@talkie.kozklde.mongodb.net/?retryWrites=true&w=majority&appName=talkie",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});


const accountController = require('./controllers/accountController');
app.use('/api', accountController)
