import express from 'express'

const app = express()
const { register, login, updateUser, deleteUser, userById, resetPassword } = require("./controllers/auth/auth");

app.get('/', (_req, res) => {
  res.send('Hello Express!')
})

app.post('/register', register);
app.post("/login", login)


app.get('/api/users/:id', (_req, res) => {
  res.json({ id: _req.params.id })
})

app.get('/api/posts/:postId/comments/:commentId', (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

export default app
