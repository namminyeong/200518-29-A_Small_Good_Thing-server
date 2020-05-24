const { users } = require('../../models');
const crypto = require('crypto');
//const jwt = require('jsonwebtoken');

const { addToken } = require('../../modules');

// 유저 아이디와 유저 네임 전달
module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    users.findOne({where : { email : email }})
      .then(result => {
        if(result) {
          // console.log(result)
          // ? db에 저장되어있는 비밀번호 복호화 - 암호화 models/users
          let decipher = crypto.createDecipher('aes-256-cbc', 'forSecret');
          let decodePW = decipher.update(result.dataValues.password, 'base64', 'utf-8');
          decodePW += decipher.final('utf8');
          // ? 복호화된 비밀번호와 req로 받은 비밀번호 비교
          if(decodePW === password) {
            // ? 토큰 생성 req.headers.cookie에 생성
            const userInfo = addToken(result);
            res.status(200).cookie('token', userInfo.token).json({user_id: `${result.dataValues.id}`, user_name: `${result.dataValues.user_name}`});
            res.end();
          } else {
            res.status(401).send('check your password');
            res.end();
          }
        } else {
          res.status(403).send('check your email');
          res.end();
        }
      });
  }
};