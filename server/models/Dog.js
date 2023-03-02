const { Schema } = require('mongoose');


const dogSchema = new Schema({
  dogName: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  dogId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  breed: {
    type: String,
    required: true,
  },
});

module.exports = dogSchema;