const jwt = require("jsonwebtoken");
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXP;
// set token secret and expiration date

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.header.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.varify(token, secret, { maxAge: expiration });
      req.user = data;

    }catch {
      console.log('Invalid token');
    }
    return req;

    },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
  // // function for our authenticated routes
  // authMiddleware: function ({ req }) {
  //   // allows token to be sent via  req.query or headers
  //   let token = req.query.token || req.headers.authorization;

  //   // ["Bearer", "<tokenvalue>"]
  //   if (req.headers.authorization) {
  //     token = token.split(' ').pop().trim();
  //   }

  //   if (!token) {
  //     return res.status(400).json({ message: 'You have no token!' });
  //   }
  }
  ,_signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
   get signToken() {
     return this._signToken;
   },
   set signToken(value) {
     this._signToken = value;
   },
};
