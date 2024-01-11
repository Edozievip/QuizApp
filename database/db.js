const mongoose = require('mongoose');


const dbURI = process.env.DATABASE_URL;
function connectDb() {
  mongoose.connect(dbURI
  )
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err.message))
};

module.exports = connectDb;