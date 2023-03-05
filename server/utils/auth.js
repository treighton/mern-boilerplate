const jwt = require("jsonwebtoken");
require('dotenv'.config());

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXP;

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
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
