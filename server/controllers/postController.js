const { Post } = require('../models')

module.exports = {

    getPosts: async function( req, res) {
        try {
            const post = await Post.find() //posts variable?
            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }  
    },

    getSinglePost: async function (req, res) {
        try {
            const post = await Post.findOne({ _id: req.params. postId });
            if(!post) {
                return res.status(404).json({ message: 'No post with that ID'});
            } else {
                res.json(post);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createPost: async function (req, res) {
        try {
            const dbPostdata = await Post.create(req.body);
            res.json(dbPostdata);
        } catch (err) {
            res.status(500).json(err)
        }
    },
};