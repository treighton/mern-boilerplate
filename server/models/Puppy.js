// Code needs to be imp-ed or src of the images that will apear on the page 

const { Schema, Model, DataTypes } = require('mangoose');

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


const Puppu = model('Puppy')
module.exports = Project;