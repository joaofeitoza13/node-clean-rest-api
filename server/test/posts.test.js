const crypto = require('crypto')
const axios = require('axios')
const postsService = require('../service/postsService')

const generate = function () {
  return crypto.randomBytes(20).toString('hex');
}

test('Should get posts', async function (){
  //given
  const post1 = await postsService.savePost({ title: generate(), content: generate() })
  const post2 = await postsService.savePost({ title: generate(), content: generate() })
  const post3 = await postsService.savePost({ title: generate(), content: generate() })
  const post4 = await postsService.savePost({ title: generate(), content: generate() })
  const post5 = await postsService.savePost({ title: generate(), content: generate() })
  const post6 = await postsService.savePost({ title: generate(), content: generate() })

  //when
  const response = await axios({
    url: 'http://localhost:3333/posts',
    method: 'get'
  })
  const posts = response.data

  //then
  expect(posts).toHaveLength(6)

  await postsService.deletePosts()
})