// const { application } = require('express');
// const mongoose = require('mongoose');
const {connect, connection} = require('mongoose')

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/blogDB';

// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



module.exports = connection;

// mongoose.connect(process.env || 'mongodb://localhost:27017/movieReviewDB')