const crypto = require('crypto');
const dotenv = require('dotenv').config();

const enToken = (user_info) => {
  const token = crypto.createHmac('sha256', 'abcdefg'/*process.env.JWT_SECRET*/)
    .update(user_info.token)
    .digest('hex');
  return token;
};

module.exports = enToken;