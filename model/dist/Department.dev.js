"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var departmentSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  department_id: {
    type: Number
  }
});
module.exports = mongoose.model('Department', departmentSchema);