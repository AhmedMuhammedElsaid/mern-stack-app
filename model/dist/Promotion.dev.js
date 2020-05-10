"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tablePromotionSchema = new Schema({
  code: {
    type: String
  },
  active: {
    type: Boolean
  },
  discount: {
    type: String
  },
  product_id: {
    type: Number
  }
});
module.exports = mongoose.model('TablePromotion', tablePromotionSchema);