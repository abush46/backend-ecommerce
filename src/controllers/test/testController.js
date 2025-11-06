const mogoose = require("mongoose");

module.exports.getProducts = async (req, res) => {
    try{
const conn = "mongodb+srv://mic:abush1157@cluster0.9bamq.mongodb.net/?appName=Cluster0";
  mogoose.connect(conn)
    //mongodb + srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/?retryWrites=true&w=majority")
      .then(() => {
        res.json({message: "DB Connection Successfull"});
          console.log("DB Connection Successfull")
      })
    .catch((err) => console.log(err.message));
        /* const products = await productModel.find();
        const productsCount = await productModel.find().count(); */

       /*  return res.json({
            success : true,
            status : 400,
            message : "list of all products",
           // products,
            count: 5
                //productsCount
        }) */

    }catch(error){
        return res.json("Error h:",error.message)
    }
}