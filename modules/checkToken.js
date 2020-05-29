const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const checkToken = (req, res) => {
  const token_info = jwt.verify(req.cookies.token, process.env.JWT_PASSWORD || 'forSecret', function(err, token) {
    if (err) {
      return res.sendStatus(400);
    } else {
      return token;
    }
  })
  return token_info;
};

module.exports = checkToken;