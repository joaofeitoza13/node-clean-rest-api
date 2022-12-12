const database = require('../infra/database');

exports.getPosts = function () {
  return database.query(
    'SELECT * FROM blog.post'
  )
}

exports.savePost = function (post) {
  return database.one(
    'INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', 
    [post.title, post.content]
  )
}

exports.updatePost = function (id, post) {
  return database.none(
    'UPDATE blog.post SET title = $1, content = $2 WHERE id = $3', 
    [post.title, post.content, id]
  )
}

exports.deletePost = function (id) {
  return database.none(
    'DELETE FROM blog.post WHERE id = $1',
    [id]
  )
}

exports.deletePosts = function () {
  return database.none(
    'DELETE FROM blog.post'
  )
}