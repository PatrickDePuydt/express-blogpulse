const db = require('./models');


// Create Comment
db.comment.create({
  name: 'Paul Allen',
  content: 'This is really neat! Thanks for posting.',
  articleId: 1
})
.then(comment => {
  console.log(comment.get())
})
.catch(error => console.log(`❌ Error: `, error))

// Test for comment


