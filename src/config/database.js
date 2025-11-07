//const { connect } = require("http2");
const mogoose = require("mongoose");

const { DB_CON_STRING } = process.env;
const conn = "mongodb+srv://mic:abush1157@cluster0.9bamq.mongodb.net/?appName=Cluster0";
 /*  const client = new MongoClient(conn, {
  serverApi: {
   // version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
  }); */
module.exports.connection = () => {
  // mogoose.connect("mongodb://localhost/ecommerce")
  //mongodb+srv://mic:abush1157@cluster0.9bamq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

  //"mongodb+srv://mic:abush1157@cluster0.9bamq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   mogoose
    .connect(
      conn
    ) 
    //mongodb + srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log(err.message));
};


