const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const DB = require("./model/connection");
const Product = require("./model/Product.js");
const Department = require("./model/Department");
const Promotion = require("./model/Promotion");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })), app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

app.get(`/api/`, async (req, res) => {
  try {
    const product = await Product.find();
    const department = await Department.find();
    const promotions = await Promotion.find();

    const data = {
      products: product,
      promotions: promotions,
      department: department,
    };
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT} `);

  DB();
});

