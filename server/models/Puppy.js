// Code needs to be imp-ed or src of the images that will apear on the page 

const { Schema, model, DataTypes } = require('mongoose');
// const sequelize = require('../config/connection');

const puppySchema = new Schema ({

    name: {
      type: String,
      required: true,
      trim: true,

    user_id: {
      type: Schema.Types.Objected,
      required: true,
      ref: 'user',
    }
  }
});


const Puppy = model('puppy',puppySchema)
module.exports = Puppy;
