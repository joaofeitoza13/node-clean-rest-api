const crypto = require('crypto')
const axios = require('axios')
const postsService = require('../service/postsService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex');
}

const request = function(url, method, data) {
  return axios({url, method, data})
}

test('Should get posts', async function (){
  const post1 = await postsService.savePost({ title: generate(), content: generate() })
  const post2 = await postsService.savePost({ title: generate(), content: generate() })
  const post3 = await postsService.savePost({ title: generate(), content: generate() })
  
  const response = await request('http://localhost:3333/posts', 'get')
  const posts = response.data
  
  expect(posts).toHaveLength(3)
  
  // await postsService.deletePosts()
  await postsService.deletePost(post1.id)
  await postsService.deletePost(post2.id)
  await postsService.deletePost(post3.id)
})
