import { Schema, model } from "mongoose"

const productSchema = Schema({

    title : String,
    sku : {type : String},
    price : Number,
    image : String,
    description : String,
    category : {type:Schema.Types.ObjectId, ref:'categories'},
    quantity : Number

}, { timestamps : true })

export default model("product", productSchema)