const router = require('express').Router();
const postRoutes = require('./postRoute'); //ref postRoute
const commentRoutes = require('./commentRoute'); //ref commentRoute

router.use('/posts', postRoutes); //this function tells the Express app that whenever a request is made to the "/posts" URL path, the "postRoutes" module should be used to handle the request.
router.use('/comments', commentRoutes);

module.exports = router;