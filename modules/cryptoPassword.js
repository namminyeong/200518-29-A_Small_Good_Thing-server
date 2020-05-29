const crypto = require('crypto');
const dotenv = require('dotenv').config();

const decrypt = (result) => {
  let decipher = crypto.createDecipher('aes-256-cbc', process.env.CIPHER_PASSWORD || 'forSecret');
  let decodePW = decipher.update(result.dataValues.password, 'base64', 'utf-8');
  decodePW += decipher.final('utf8');
  return decodePW;
};


module.exports = decrypt;