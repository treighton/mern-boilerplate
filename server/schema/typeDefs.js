const { gql } = require('apollo-server-express');

const typeDefs = gql`
    enum ExpenseTypes {
        FOOD
        TRAVEL
        ENTERTAINMENT
        UTILITIES
        HOUSING
    }

   type User {
        _id: ID
        name: String
        username: String
        email: String
        expenses: [Expense]
   }

   type Expense {
        _id: ID
        amount: Float
        name: String
        date: String
        receipt: String
        expenseType: ExpenseTypes
   }

   type Query {
        user(id: ID): User
        expenses: [Expense]
   }

   type Mutation {
        addExpense(
            amount: Float
            name: String
            date: String
            receipt: String
            expenseType: ExpenseTypes
        ): Expense
   }
`
module.exports = typeDefs