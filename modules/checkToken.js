const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkToken = (req, res) => {
  const token_info = jwt.verify(req.cookies.token, 'forSecret'/*process.env.JWT_SECRET*/, function(err, token) {
    if (err) {
      return res.sendStatus(400);
    } else {
      return token;
    }
  })
  return token_info;
};

module.exports = checkToken;