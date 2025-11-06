//const mongoose = require("mongoose")
import { Schema, model } from 'mongoose';
const categorySchema = Schema({

    title : String,
    image : {type : String, default : null},
    icon : {type : String, default : null},
    description : {type : String, default : null},

}, { timestamps : true })

module.exports = model("categories", categorySchema)