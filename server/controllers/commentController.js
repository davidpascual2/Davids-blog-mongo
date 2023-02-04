const { Post, Comment } = require('../models') //comments can only exist if post exist, so import post

module.exports = {

    // getComments(req, res) {
    //     Comment.find()
    //       .then((comment) => res.json(comment))
    //       .catch((err) => res.status(500).json(err));
    //   }
    
    //declarted within an object literal which is being exported. 
    //functions within an object literals must have property name
    getComments: async function ( req, res ) {
        try{
            const comment = await Comment.find(); //commnets variable?
            res.json(comment);
        } catch (err) {
            res.status(500).json(err)
        }
    }, 

    getSingleComment: async function (req, res) {
        try {
            const comment = await Comment.findOne({ _id: req.params.commentId });
            if(!comment) {
                res.status(404).json({ message: 'no comment found with that id!'})
            } else {
                res.json(comment);
            }  
        } catch (err) {
            res.status(500).json(err)
        }
    },

    createComment: async function (req, res) {
        try {
            const comment = await Comment.create(req.body);
            const post = await Post.findOneAndUpdate(
                { _id: req.body.postId },
                { $push: {comments: comment._id } },
                { new: true }
            );
            if(!post) {
                res.states(404).json({ message: 'Comment created, but no posts with that ID!'})
            } else {
                res.json({ message: 'comment created'})
            }
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }


};

// module.exports = Post, Comment