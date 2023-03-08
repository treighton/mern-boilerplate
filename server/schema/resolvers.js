const { AuthenticationError } = require('apollo-server-express');
const { User, Puppy } = require('../models');
const { signToken } = require('../utils/auth');
// Need to add two more consts in order to catch the layout pages update.

const resolvers = {
    // User log-in Mutation
    Mutation: {
        addUser: async (parent, {username, password}) => {
            const user = await User.creat({ username, password});
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError('Incorrect username or password.');

            }
            // Password examin 
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect username or password.');

            }
            const token = signToken(user);
            return { token, user };
        },
        
    }
}
module.exports = resolvers;
