const postsData = require('../data/postsData')



exports.getPosts = function () {
  console.log("Services Layer.")
  console.log("-")
  console.log("Invoking getPosts.")
  console.log("------------------")

  return postsData.getPosts()
}

exports.savePost = function (post) {
  console.log("Services Layer.")
  console.log("-")
  console.log("Invoking savePosts.")
  console.log("-------------------")

  return postsData.savePost(post)
}

exports.deletePosts = function () {
  console.log("Services Layer.")
  console.log("-")
  console.log("Invoking deletePosts.")
  console.log("-------------------")

  return postsData.deletePosts()
}