const database = require('../infra/database');



exports.getPosts = function () {
  return database.query('SELECT * FROM blog.post')
}

exports.savePost = function (post) {
  return database.one('INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', [post.title, post.content])
}

exports.deletePosts = function () {
  return database.none('DELETE FROM blog.post')
}