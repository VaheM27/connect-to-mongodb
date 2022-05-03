const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

  mongoose.connect("mongodb://localhost/testaroo");
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made, now make fireworks...");
      done();
    })
    .on("error", function (error) {
      console.log("Connection error:", error);
    });

