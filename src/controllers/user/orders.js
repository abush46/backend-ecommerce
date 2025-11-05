import { find } from "../../models/order"

export async function orders(req, res) {
    try{

        const user = req.user
        const orders = await find({user : user._id})
            .populate({path : "user" , select : "-password -token"})
            .populate("items.productId")
            .populate("items.categoryId")

        return res.json({
            success : true,
            message : "orders",
            data : orders
        })

    }catch(error){
        return res.send(error.message)
    }
}