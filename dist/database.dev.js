"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var departmentsSchema = new Schema({
  name: {
    type: String,
    trim: true
  }
});