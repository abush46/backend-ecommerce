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
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// Set up Global configuration access
dotenv.config();

// MULTER
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
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
const mongoose = require("./config/database")()

import { getUserById, createUser } from './controllers/userController.js';



const getAllUsers = function (req, res)  {
  //const userId = req.params.id;
  // Logic to fetch a user by ID
  res.json({ message: `Get all user` });
};
app.post('/api/byId', getUserById);

 app.post('/api/create', createUser);


// Basic root route (optional)
app.get('/', (req, res) => {
   //res.json({ message: 'Data received successfully!' });
  res.send('API Server is Running');
});

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
