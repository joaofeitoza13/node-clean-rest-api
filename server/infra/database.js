const pgp = require('pg-promise')()

const db = pgp({
  user: 'postgres',
  password: 'Shadow)491',
  host: 'localhost',
  port: 3000,
  database: 'blog'
})

console.log("Connected to DB.")
console.log("----------------")

module.exports = db