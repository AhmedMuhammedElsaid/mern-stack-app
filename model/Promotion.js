const mongoose = require('mongoose');
const Schema = mongoose.Schema;






const tablePromotionSchema = new Schema({
    code: { type: String },
    active: { type: Boolean },
    discount: { type: String },
    product_id:{type:Number}
})

module.exports = mongoose.model('TablePromotion', tablePromotionSchema);