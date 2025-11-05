import productModel, { find, findOne, findOneAndUpdate, findOneAndDelete } from "../../models/product";

export async function addProduct(req, res) {
    try{

        const {title, sku, price, image} = req.body;

        if(!title || !sku || !price) return res.send("Fields are empty")

        let product = new productModel(req.body)
        product.save()

        return res.json({
            success : true,
            message : "Product inserted successfully",
            data : product
        })

    }catch(error){
        return res.send(error.message + " Error in adding product")
    }
}

export async function UseraddProduct(req, res) {
    try{

        const {title, sku, price, image} = req.body;

        if(!title || !sku || !price) return res.send("Fields are empty")

        let product = new productModel(req.body)
        product.save()

        return res.json({
            success : true,
            message : "Product inserted successfully",
            data : product
        })

    }catch(error){
        return res.send(error.message + " Error in adding product")
    }
}

export async function getProducts(req, res) {
    try{

        const products = await find();
        const productsCount = await find().count();

        return res.json({
            success : true,
            status : 400,
            message : "list of all products",
            products,
            count : productsCount
        })

    }catch(error){
        return res.send(error.message)
    }
}


export async function updateProduct(req, res) {
    try{

        const {title, sku, price, image} = req.body;
        const {id} = req.query;

        // check if product exist with the given product id
        const product = await findOne({_id : id})

        if(product){
            const updatedProduct = await findOneAndUpdate({_id : id}, req.body, {new :true})

            return res.json({
                success : true,
                status : 200,  
                message : "product updated successfully",
                data : updatedProduct
            })
        }else{
            
            return res.json({
                success : false,
                status : 400,
                message : "product does not exist"
            })

        }

    }catch(error){
        return res.send(error.message)
    }
}

export async function deleteProduct(req, res) {
    try{

        const {id} = req.query;
        
        // check if product exist with the given product id
        const product = await findOneAndDelete({_id : id})
        if(!product){
            return res.json({
                success : false,
                message : "product does not exist",
            })
        }
        return res.json({
            success : true,
            message : "product deleted successfully",
        })

    }catch(error){
        return res.send(error.message)
    } 
}

export async function getAllProducts(req, res) {
    try{

        // Search through title names
        var {search} = req.query
        if(!search) search = ""

        const products = await find({title:{'$regex' : search, '$options' : 'i'}})
            .populate("category")

        return res.json({
            success : true,
            status : 200,
            message : "list of products",
            data : products
        })

    }catch(error){
        return res.json({
            success : false,
            status : 400,
            message : error.message
        })
    }
}

