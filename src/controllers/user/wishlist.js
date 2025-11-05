import { findOneAndUpdate, find } from "../../models/user";
import { ObjectId } from 'mongodb';


export async function addToWishlist(req, res) {
    try{

        const data = req.body
        let user = req.user

        const addToWishlist = await findOneAndUpdate({_id : user?._id}, { $push: { wishlist: data } },{new : true})

        return res.json({
            success : true,
            message : "product pushed in wishlist successfully",
            data : addToWishlist
        })

    }catch(error){
        return res.send(error.message)
    }
}

export async function removeFromWishlist(req, res) {
    try{

        const id = req.query
        let user = req.user

        const removeFromWishlist = await findOneAndUpdate({_id : user?._id}, { $pull: { wishlist: {productId : ObjectId(id)} } },{new : true})

        return res.json({
            success : true,
            message : "product removed from wishlist successfully",
            data : removeFromWishlist
        })

    }catch(error){
        return res.send(error.message)
    }
}

export async function wishlist(req, res) {
    try{

        const user = req.user

        const wishlist = await find({_id : user._id})
            .populate("wishlist.productId")
            .select("-password -userType")

        return res.json({
            success : true,
            message : "Wishlist",
            data : wishlist
        })

    }catch(error){
        return res.send(error.message)
    }
}