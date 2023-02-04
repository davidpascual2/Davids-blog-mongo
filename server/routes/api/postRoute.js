const router = require('express').Router();

const { //this references all differenct crud options in controllers
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

//when a GET request is made to the "/" URL path, the "getPosts" function will be called. This function is responsible for retrieving and returning the data for the GET request.
//when a POST request is made to the "/" URL path, the "createPost" function will be called. This function is responsible for processing and saving the data for the POST request.
router.route('/').get(getPosts).post(createPost);

//When a GET request is made to a URL path that matches "/:postId", the "getSinglePost" function will be called. The ":postId" portion of the URL path is treated as a dynamic parameter, meaning that it can be any value.
router.route('/:postId').get(getSinglePost);

module.exports = router;