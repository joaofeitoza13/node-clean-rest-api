const pgp = require('pg-promise')()

const db = pgp({
  user: 'postgres',
  password: 'Shadow)491',
  host: 'localhost',
  port: 3333,
  database: 'blog'
})

module.exports = db