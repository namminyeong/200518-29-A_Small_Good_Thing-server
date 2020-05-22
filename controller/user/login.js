const { users } = require('../../models');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');

module.exports = {
  post: (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    users.findOne({where : { email : email }})
      .then(result => {
        if(result) {
          let decipher = crypto.createDecipher('aes-256-cbc', 'forSecret');
          let decodePW = decipher.update(result.dataValues.password, 'base64', 'utf-8');
          decodePW += decipher.final('utf8');
          if(decodePW === password) {
            let userInfo = {
              id: req.body.email,
              pw: result.dataValues.password
            };
            let options = {
              expiresIn: '1d',
              issuer: 'goodthing',
              subject: 'user_info'
            };
            jwt.sign(userInfo, 'forSecret', options,
              function(err, token) {
                if(err) {
                  res.status(500);
                  res.end();
                } else {
                  res.status(200).cookie('token', token).json({id: `${result.dataValues.id}`});
                  res.end();
                }
              });
          } else {
            res.status(404).send('wrong password');
            res.end();
          }
        } else {
          res.status(404).send('unvalid user');
          res.end();
        }
      });
  }
};