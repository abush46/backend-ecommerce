import orderModel from "../../models/order";
import { findOneAndUpdate, find } from "../../models/user";
import { findOneAndUpdate as _findOneAndUpdate } from "../../models/product";
import { ObjectId } from 'mongodb';

export async function checkout(req, res) {
    try{
        
        var body = req.body;
        const user = req.user

        body.user = user?._id
        body.orderId = (Math.floor(Math.random() * 1000000000)).toString();

        // if cart is not empty and items array contains objects
        if(body?.items.length){
            let checkout = new orderModel(body)
            checkout.save()

            let items = body?.items 

            items.forEach(async item => {

                const updatedQuantity = await _findOneAndUpdate(
                    { _id: item.productId },
                    [{
                        $set: {
                            quantity: {
                                $subtract: ["$quantity", item.quantity]
                            },
                        }
                    }],
                )
            });
            return res.json({
                success: true,
                message : "successful checkout",
                data : checkout
            })
        }
        else{
            return res.json({
                success: false,
                message : "pass correct parameters"
            })
        }

    }catch(error){
        return res.send(error.message)
    }
}

export async function addToCart(req, res) {
    try{

        const data = req.body
        let user = req.user

        const addToCart = await findOneAndUpdate({_id : user?._id}, { $push: { cart: data } },{new : true})

        return res.json({
            success : true,
            message : "product pushed in cart successfully",
            data : addToCart
        })

    }catch(error){
        return res.send(error.message)
    }
}

export async function removeFromCart(req, res) {
    try{

        const id = req.query
        let user = req.user

        const removeFromCart = await findOneAndUpdate({_id : user?._id}, { $pull: { cart: {productId : ObjectId(id)} } },{new : true})

        return res.json({
            success : true,
            message : "product removed from cart successfully",
            data : removeFromCart
        })

    }catch(error){
        return res.send(error.message)
    }
}

export async function cart(req, res) {
    try{

        const user = req.user

        const cart = await find({_id : user._id})
            .populate("cart.productId")
            .select("-password -userType")

        return res.json({
            success : true,
            message : "cart",
            data : cart
        })

    }catch(error){
        return res.send(error.message)
    }
}