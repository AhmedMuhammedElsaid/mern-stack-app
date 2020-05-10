const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    department_id:{type:Number}
})
module.exports= mongoose.model('Department', departmentSchema);