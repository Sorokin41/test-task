let posts = []

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
      getUsersList()
      return response.json()
    })
  .then((data) => posts = Array.from(data))

function getUsersList() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      let result = []
      for(let user of data) {
        result.push(createElement(user))
      }
      return result       
    })
    .then((result) => console.log(result))
}

function createElement(user) {
  return element = {
    id: user.id,
    name: user.name,
    email: user.email,
    adress: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
    website: `https://${user.website}`,
    company: user.company.name,
    posts:  createPostsList(user.id, posts)
  }
}

function createPostsList(userId, posts) {
  return posts.filter(post => userId === post.userId).map(post => {
    return {
      id: post.id,
      title: post.title,
      title_crop: `${post.title.substring(0,20)}...`,
      body: post.body
    }
  })
}