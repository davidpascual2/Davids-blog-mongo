const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        text: String,
        username: String,
        comments: [{type: Schema.Types.ObjectId, ref: 'comment' }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//create a virtual property "comment count" that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

//initialze our Post model
const Post = model('post', postSchema);

module.exports = Post;