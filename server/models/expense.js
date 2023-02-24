const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    receipt: {
        type: String,
    },
    expenseType: {
        type: String,
        required: true
    }
});

const Expense = model('Expense', expenseSchema);

module.exports = Expense;
