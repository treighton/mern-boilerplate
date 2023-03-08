const { AuthenticationError } = require('apollo-server-express');
const { User, Puppy } = require('../models');
const { signToken } = require('../utils/auth');
// Need to add two more consts in order to catch the layout pages update.

module.exports = resolvers;
