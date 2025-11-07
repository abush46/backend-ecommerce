const express = require('express')
const app = express();
const port = process.env.PORT;
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
var path = require('path');
var cors = require('cors')

// To access public folder
app.use(cors())
app.use("/public",express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// Set up Global configuration access
dotenv.config();

// MULTER
 const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uploads/')
  },
  filename: function (req, file, cb) {
    let uploadFile = file.originalname.split('.')
    let name = `${uploadFile[0]}-${Date.now()}.${uploadFile[uploadFile.length-1]}`
    cb(null, name)
  }
})
const upload = multer({ storage: storage }) 

const { register, login, updateUser, deleteUser, userById, resetPassword } = require("./controllers/auth/auth");
const { UseraddProduct,addProduct, updateProduct, deleteProduct, getAllProducts } = require("./controllers/products/products")
const { checkout, addToCart, cart, removeFromCart } = require("./controllers/user/cart")
const { isAdmin, checkAuth } = require("./controllers/middlewares/auth");
const { dashboardData, getAllUsers } = require('./controllers/admin/dashboard');
const { getAllOrders, changeStatusOfOrder } = require('./controllers/admin/orders');
const { orders } = require('./controllers/user/orders');
const { addCategory, getCategories, updateCategory, deleteCategory } = require('./controllers/categories/category');
const { addToWishlist, wishlist, removeFromWishlist } = require('./controllers/user/wishlist');
const mongoose = require("./config/database");
const {getProducts} = require("./controllers/test/testController");
//const { getUserById, createUser } =require('./controllers/userController');

mongoose();

//getProducts();
//app.post('/api/byId', getUserById);

 //app.post('/api/create', createUser);


// Basic root route (optional)
app.get('/', (req, res) => {
  //const image = req.body.image;
   //res.json({ message: 'Data received successfully!' });
  res.send('API Server is Running');
});

app.get('/api/test-products', getProducts);

app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received successfully!' });
})

// AUTH
app.post('/api/register', register);
app.post("/api/login", login)


// User Routes
app.post("/api/update-user", updateUser)
app.get("/api/user", userById)
app.get("/api/delete-user", deleteUser)
app.post("/api/reset-password", resetPassword)


// Products
app.post("/api/product", [isAdmin], addProduct)
app.post("/api/user-add-product",[checkAuth], UseraddProduct)
app.get("/api/products", getAllProducts)
app.post("/api/update-product", [isAdmin], updateProduct)
app.get("/api/delete-product", [isAdmin], deleteProduct)


// CATEGORIES
app.post("/api/category", [isAdmin], addCategory)
app.get("/api/categories", getCategories)
app.post("/api/update-category", [isAdmin], updateCategory)
app.get("/api/delete-category", [isAdmin], deleteCategory)


// ORDERS
app.get("/api/orders",[checkAuth],orders)

// CHECKOUT
app.post("/api/checkout",[checkAuth],checkout)

// WISHLIST
app.post("/api/add-to-wishlist",[checkAuth],addToWishlist)
app.get("/api/wishlist",[checkAuth],wishlist)
app.get("/api/remove-from-wishlist",[checkAuth],removeFromWishlist)

// ADMIN
app.get("/api/dashboard",[isAdmin],dashboardData)
app.get("/api/admin/orders",[isAdmin],getAllOrders)
app.get("/api/admin/order-status",[isAdmin],changeStatusOfOrder)
app.get("/api/admin/users",[isAdmin],getAllUsers)

// HELPER
app.post('/api/photos/upload', upload.array('photos', 12), function (req, res, next) {  
  // req.files is array of `photos` files

  try{
    let files = req.files;
    if(!files.length){
      return res.status(400).json({ err:'Please upload an image', msg:'Please upload an image' })
    }
    let file = req.files[0]
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        return res.status(400).json({"image" : file.filename}) 
    }
  }
  catch(error){
    return res.send(error.message)
  }
})


/* app.get('/', (_req, res) => {
  res.send('Hello Express!')
})
app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received successfully!' });
}) */
//app.post('/api/data',
  //createUser);
         //(req,res)) => {
    // Access the request body
//   const requestData = req.body; 

 //  console.log('Received data:', requestData);

    // Process the data (e.g., save to a database)
    // ...

    // Send a response back to the client
 // res.json({ message: 'Data received successfully!', data: requestData });
 


/* app.get('/api/users/:id', (_req, res) => {
  res.json({ id: _req.params.id })
})

app.get('/api/posts/:postId/comments/:commentId', (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
}) */

export default app
