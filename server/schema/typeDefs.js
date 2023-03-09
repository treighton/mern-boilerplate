const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  type Puppy {
    _id: ID!
    name: String
    userId : ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    puppy: ID
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
