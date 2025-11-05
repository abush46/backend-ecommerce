import { find } from "../../models/order"
import { find as _find } from "../../models/user"
import { find as __find } from "../../models/product"
import { find as ___find } from "../../models/category"

export async function dashboardData(req, res) {

    try{

        // counts 
        const ordersCount = await find().count()
        const usersCount = await _find().count()
        const productsCount = await __find().count()
        const categoriesCount = await ___find().count()

        return res.json({
            success : true,
            message : "dashboard data",
            data : {
                ordersCount,
                usersCount,
                productsCount,
                categoriesCount
            }
        })

    }catch(error){
        res.send(error.message)
    }

}

export async function getAllUsers(req, res) {

    try{

        // all users
        const users = await _find()
            .select("-password -token")

        return res.json({
            success : true,
            message : "all users",
            data : users
        })

    }catch(error){
        res.send(error.message)
    }

}
