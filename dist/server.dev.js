"use strict";

var express = require("express");

var morgan = require("morgan");

var bodyParser = require("body-parser");

var cors = require("cors");

var DB = require("./model/connection");

var Product = require("./model/Product.js");

var Department = require("./model/Department");

var Promotion = require("./model/Promotion");

var path = require("path");

var app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
})), app.use(bodyParser.json());
var PORT = process.env.PORT || 4000;
app.get("/api/", function _callee(req, res) {
  var product, department, promotions, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Product.find());

        case 3:
          product = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(Department.find());

        case 6:
          department = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(Promotion.find());

        case 9:
          promotions = _context.sent;
          data = {
            products: product,
            promotions: promotions,
            department: department
          };
          res.json(data);
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          res.json({
            message: _context.t0
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
});

if (process.env.NODE_ENV === "production") {
  app.use(express["static"]("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function () {
  console.log("Server is running on  port ".concat(PORT, " "));
  DB();
});