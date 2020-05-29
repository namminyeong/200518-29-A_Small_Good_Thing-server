const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const addToken = (result) => {
  const { id, user_name } = result.dataValues;
  const userInfo = {
    user_id: id,
    user_name: user_name,
  };
  userInfo.token = jwt.sign(userInfo, process.env.JWT_PASSWORD || 'forSecret', {
    expiresIn: '1d',
    issuer: 'goodthing',
    subject: 'user_info'
  });
  return userInfo;
};

module.exports = addToken;