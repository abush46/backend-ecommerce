import express from 'express'
import { get } from 'http';

const app = express()
const { createUser,getAllUsers } = require('./controllers/userController');
// ... other imports and MongoDB connection ...
//const userRoutes = require('./routes/userRoutes'); // Import the user routes

// Middleware to parse JSON bodies (essential for POST requests)
app.use(express.json());


app.post('/api/users', getAllUsers);

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
