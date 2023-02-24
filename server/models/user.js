const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    expenses:[ {
        type: Schema.Types.ObjectId,
        ref: 'expense'
    }],
});

const User = model('User', userSchema);

module.exports = User;
