import express from 'express'

const app = express()
const { createUser } = require('../controllers/userController');
// ... other imports and MongoDB connection ...

app.use(express.json());


app.get('/', (_req, res) => {
  res.send('Hello Express!')
})

app.post('/api/data', createUser);
//=> {
    // Access the request body
  //  const requestData = req.body; 

   // console.log('Received data:', requestData);

    // Process the data (e.g., save to a database)
    // ...

    // Send a response back to the client
  //  res.status(201).send({ message: 'Data received successfully!', data: requestData });
//});


app.get('/api/users/:id', (_req, res) => {
  res.json({ id: _req.params.id })
})

app.get('/api/posts/:postId/comments/:commentId', (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

export default app
