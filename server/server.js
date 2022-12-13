const express = require('express');

const app = express()

console.log("---------------")
console.log("Server Running.")
console.log("---------------")

app.use(express.json())

app.use('/', require('./route/postsRoute'))

app.use(function (error, req, res, next) {
  if(error.message === 'Post already exists.'){
    return res.status(409).send(error.message)
  } if(error.message === 'Post not found.'){
    return res.status(404).send(error.message)
  }
  res.status(500).send(error.message)
})

app.listen(3333)
