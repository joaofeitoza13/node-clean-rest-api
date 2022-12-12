const express = require('express');

const app = express()

console.log("---------------")
console.log("Server Running.")
console.log("---------------")

app.use(express.json())

app.use('/', require('./route/postsRoute'))

app.listen(3333)
