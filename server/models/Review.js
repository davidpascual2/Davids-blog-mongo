const mongoose = require('mongoose');
// const {Schema, Types } = require('mongoose');

// Schemas define the shape of the documents within the collection.
const reviewSchema = new mongoose.Schema({
        //properties
        movie: String,
        movie_review: String
});

//extend methods object with custom method

// bookSchema.methods.getDiscount = function () {
//     const discountPrice = this.price * 0.5;
//     console.log(
//       `The book's title is ${this.title} and the discounted price is ${discountPrice}`
//     );
// };

// compile model based on schema -- Review is collection (table) 
const Review = mongoose.model('Review', reviewSchema);

Review.create( //creates document with these values
    {
        movie: 'Mulan',
        movie_review: "its good man"
    },
    (err) => (err ? handleError(err) : console.log('created new document'))
)

module.exports = Review;