const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    pasword: String
  }
`;
module.exports = typeDefs;
