const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = () => {
  mongoose.connect(
    process.env.MONGODB_URL || process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("The connection has been established to the DB");
    }
  );
};

module.exports = connectDB;
