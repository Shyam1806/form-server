const mongoose = require("mongoose");

// const URL = ``; insert your DB URL

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("database connected successful");
});

connection.on("error", () => {
  console.log("not connected to database");
});