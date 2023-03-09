const jwt = require("jsonwebtoken");
require('dotenv').config();
//hardcoded here can be added with env file
const secret = "secret1";
const expiration ="10m";
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
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;

    }catch {
      console.log('Invalid token');
    }
    return req;

    },
//removed email from signed token object
  // signToken: function ({ username, _id }) {
  //   const payload = { username, _id };
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
  // }
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  //  get signToken() {
  //    return this._signToken;
  //  },
  //  set signToken(value) {
  //    this._signToken = value;
  //  },
};
