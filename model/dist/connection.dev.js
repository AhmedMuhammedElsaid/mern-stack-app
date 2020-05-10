"use strict";

var mongoose = require("mongoose");

require("dotenv/config");

var connectDB = function connectDB() {
  mongoose.connect(process.env.MONGODB_URL || process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function () {
    console.log("The connection has been established to the DB");
  });
};

module.exports = connectDB;