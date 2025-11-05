import { Schema, model } from "mongoose"

const orderSchema = Schema({

    orderId : String,
    user : {type:Schema.Types.ObjectId, ref:'user', required:true},
    items : 
        [
            {
                productId : {type: Schema.Types.ObjectId, ref : "product"}, 
                categoryId : {type: Schema.Types.ObjectId, ref : "categories"},
                quantity : Number, 
                price : Number
            }
        ],
    amount : Number,
    discount : Number,
    shippingAddress : String,
    status : {type : String, enum : ["pending", "shipped", "delivered"]},
    country : {type : String},
    city : {type : String},
    zipcode : {type : String},
    payment_type : {type : String, enum: ["cod","online"]},
    shippedOn : {type : String},
    deliveredOn : {type : String}

}, { timestamps : true })

export default model("order", orderSchema)