

module.exports.getProducts = async (req, res) => {
    try{

        /* const products = await productModel.find();
        const productsCount = await productModel.find().count(); */

        return res.json({
            success : true,
            status : 400,
            message : "list of all products",
           // products,
            count: 5
                //productsCount
        })

    }catch(error){
        return res.json("Error h:",error.message)
    }
}