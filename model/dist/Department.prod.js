"use strict";var mongoose=require("mongoose"),Schema=mongoose.Schema,departmentSchema=new Schema({name:{type:String,trim:!0},department_id:{type:Number}});module.exports=mongoose.model("Department",departmentSchema);