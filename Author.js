const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(tittle, body) {
    const post = new Post(tittle, body, this.name)
    this.posts.push(post)
    return post
  }
}

module.exports = Author