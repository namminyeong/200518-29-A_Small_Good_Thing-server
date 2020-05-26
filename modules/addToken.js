const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const addToken = (result) => {
  const { id, user_name } = result.dataValues;
  const userInfo = {
    user_id: id,
    user_name: user_name,
  };
  userInfo.token = jwt.sign(userInfo, 'forSecret'/*process.env.JWT_SECRET*/, {
    expiresIn: '1d',
    issuer: 'goodthing',
    subject: 'user_info'
  });
  return userInfo;
};

module.exports = addToken;