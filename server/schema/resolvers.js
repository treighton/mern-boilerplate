const { Expense, User } = require('../models')

const resolvers = {
    Query: {
       user: async (_, {_id}) => {
        const user = await User.findById(_id)
        return user
       }, 
       expenses: async () => {
          const expenses = await Expense.find({})
          return expenses
       }
     },
     Mutation: {
      addExpense: async (_, {
        amount,
        name,
        date,
        receipt,
        expenseType
      }) => {
          const newExpense = {
            amount: amount || 0,
            name: name || Date.now().toLocaleString(),
            date: new Date(date) || undefined,
            receipt: '',
            expenseType: expenseType || 'Entertainment'
          }
          const expense = Expense.create(newExpense)
          return expense
      }
     }
}

module.exports = resolvers