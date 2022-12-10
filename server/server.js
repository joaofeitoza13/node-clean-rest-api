const express = require('express');

const app = express()

console.log("O servidor está rodando.")

app.use('/', require('./route/postsRoute'))

app.listen(3333)
