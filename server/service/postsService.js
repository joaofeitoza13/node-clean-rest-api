const postsData = require('../data/postsData')



exports.getPosts = function () {
  console.log("Services Layer.")
  console.log("-")
  console.log("Invoking getPosts.")
  console.log("------------------")
  return postsData.getPosts()
}