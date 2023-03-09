// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
// // Make user Schema
// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// });

// // Make hash user password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bycrpt.hash(this.password, saltRounds);
//     }
//     next();
// });
// // Make custom methode for campareing and validation password and logging in 
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);

// };
// const User = model('user', userSchema);

// model.exports = User;
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
