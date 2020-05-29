const crypto = require('crypto');

const enToken = (user_info) => {
  const token = crypto.createHmac('sha256', process.env.RE_JWT_PASSWORD || 'forSecret')
    .update(user_info.token)
    .digest('hex');
  return token;
};

module.exports = enToken;