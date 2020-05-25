const crypto = require('crypto');

const decrypt = (result) => {
  let decipher = crypto.createDecipher('aes-256-cbc', 'forSecret'/*process.env.CIPHER_SECRET*/);
  let decodePW = decipher.update(result.dataValues.password, 'base64', 'utf-8');
  decodePW += decipher.final('utf8');
  return decodePW;
};


module.exports = decrypt;