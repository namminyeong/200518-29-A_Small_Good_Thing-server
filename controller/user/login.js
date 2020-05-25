const { users } = require('../../models');

const { addToken, enToken, decrypt } = require('../../modules');

// 유저 아이디와 유저 네임 전달
module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    users.findOne({where : { email : email }})
      .then(result => {
        if(result) {
          // ? db에 저장되어있는 비밀번호 복호화 <-> 암호화 models/users
          const decodePW = decrypt(result);       
          // ? 복호화된 비밀번호와 req로 받은 비밀번호 비교
          if(decodePW === password) {
            // ! 토큰 생성 req.headers.cookie에 생성
            const user_info = addToken(result);
            //console.log("---incookie", user_info.token)

            // ! 토큰 암호화
            const token = enToken(user_info);
            //console.log("---enToken", token)

            res.status(200).cookie('token', user_info.token)
              .json({
                user_id: result.dataValues.id,
                user_name: result.dataValues.user_name,
                token: token
              })
              .end();
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