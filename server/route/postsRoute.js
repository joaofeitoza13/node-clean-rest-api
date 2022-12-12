const express = require('express')
const router = express.Router()
const postsService = require('../service/postsService')



router.get('/posts/', async function (req, res) {

  const posts = await postsService.getPosts()

  res.json(posts)
})

router.get('/posts/:id', async function (req, res) {
  const postId = req.params.id

  const fetchedPost = await postsService.getPost(postId)

  res.json(fetchedPost)
})

router.post('/posts/', async function (req, res) {
  const post = req.body

  const newPost = await postsService.savePost(post)

  res.json(newPost)
})

router.put('/posts/:id', async function (req, res) {
  const postId = req.params.id
  const post = req.body

  await postsService.updatePost(postId, post)

  res.end()
})

router.delete('/posts/:id', async function (req, res) {
  const postId = req.params.id
  const post = req.body

  await postsService.deletePost(postId)

  res.json(post)
})

module.exports = router
