const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const addToken = (result) => {
  const { email, password } = result.dataValues;
  const userInfo = {
    email: email,
    password: password
  };
  userInfo.token = jwt.sign(userInfo, 'forSecret'/*process.env.JWT_SECRET*/, {
    expiresIn: '1d',
    issuer: 'goodthing',
    subject: 'user_info'
  });
  return userInfo;
};

module.exports = addToken;