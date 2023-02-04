const express = require('express');
const db = require('./config/connection');
// const mongodb = require('mongodb').MongoClient;
const routes = require('./routes');
// const { Review } = require('./models')

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

//========================//

// app.get('/', (req, res) => {

    // res.send('hello World!');
    
    // const sqlInsert = "INSERT INTO movie_reviews (movie, review) VALUES ('inception', 'good movie');"
    // db.query(sqlInsert, (err, result) => {
    //     res.send('hello David')
    // })
// })

// app.post('/create', (req, res) => {
//     // Use db connection to add a document
//     db.collection('petCollection').insertOne(
//       { name: req.body.name, breed: req.body.breed },
//       (err, results) => {
//         if (err) throw err;
//         res.json(results);
//       }
//     );
//   });

// app.get('/read', (req, res) => {
//     // Use db connection to find all documents in collection
//     db.collection('movieCollection')
//       .find()
//       .toArray((err, results) => {
//         if (err) throw err;
//         res.send(results);
//       });
//   });

  // app.get('/all-reviews', (req, res) => {
  //   // Using model in route to find all documents that are instances of that model
  //   Review.find({}, (err, result) => {
  //     if (err) {
  //       res.status(500).send({ message: 'Internal Server Error' });
  //     } else {
  //       res.status(200).json(result);
  //     }
  //   });
  // });

//================================//

// app.listen(PORT, () => {
//     console.log(`API running on port ${PORT}`)
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});