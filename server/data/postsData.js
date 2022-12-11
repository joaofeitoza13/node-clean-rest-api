const database = require('../infra/database');



exports.getPosts = function () {
  console.log("Data Layer.")
  console.log("-")
  console.log("Running getPosts.")
  console.log("-----------------")

  return database.query('select * from blog.post')
}