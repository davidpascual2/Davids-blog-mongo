// const Review = require('./Review');

// module.exports = { Review };

const Post = require('./Post'); //referenced in controllers/postController
const Comment = require('./Comment'); //referenced in controllers/commentController

module.exports = { Post, Comment };