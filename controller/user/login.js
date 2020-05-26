const { users } = require('../../models');

const { addToken, enToken, checkToken, decrypt } = require('../../modules');

// 유저 아이디와 유저 네임 전달
module.exports = {
  post: (req, res) => {
    // ! 세션아이디가 있으면 토큰을 검증하고 유저 아이디를 반환한다.
    // ! 세션아이디가 없으면 로그인 페이지로 이동
    // ! 세션아이디 && 유저아이디도 없을 때 err 404
    if (Object.keys(req.body).length === 0) {
      if (req.cookies.session_id) {
        const token_info = checkToken(req);
        const { user_id, user_name } = token_info;
        const token = enToken(req.cookies);
        res.status(200)
          .json({
            user_id: user_id,
            user_name: user_name,
            token: token
          });
      } else if (!req.cookies.session_id) {
        res.redirect('/');
        res.end();
      } else {
        res.status(404).send('login plese');
        res.end();
      }
    } else {
      const { email, password } = req.body;
      users.findOne({where : { email : email }})
        .then(result => {
          if(result) {
            // ? db에 저장되어있는 비밀번호 복호화 <-> 암호화 models/users
            const decodePW = decrypt(result);       
            // ? 복호화된 비밀번호와 req로 받은 비밀번호 비교
            if(decodePW === password) {
              const user_info = addToken(result);
              const token = enToken(user_info);
              
              req.session.id = result.dataValues.id;
              // console.log("---user_id",result.dataValues.id);
              // console.log("---session_id",req.session.id);
              // console.log(res.req.session);
  
              res.status(200)
                .cookie('session_id', req.session.id)
                .cookie('token', user_info.token)
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
        }).catch((err) => {
          console.log("CATCH", err);
          res.status(500).send(err);
        });
    }
  }
};