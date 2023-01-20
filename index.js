const Author = require("./Author");
const Comment = require("./Comment")
const Post = require("./Post")

const autor = new Author("Gabriel")
const post = autor.writePost("tittle", "lorem ipsum dolor sic...")

console.log(autor);
console.log(post);
