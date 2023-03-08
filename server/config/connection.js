// const mongoose = require('mongoose');
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/puppy-play-date",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
//   }
// );
// module.exports = mongoose.connection;
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/puppy-play-date';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = mongoose.connection;
