module.exports = {
  post: (req, res) => {
    if(req.session.id) {
      //console.log(" ---LOGOUT--- req.session",req.session)
      req.session.destroy(err => {
        if(err) {
          console.log(err);
        } else {
          //console.log(" ---DESTORY--- req.session",req.session)
          res.clearCookie('session_id')
          res.clearCookie('token', {path: '/'});
          res.status(200).end('post logout success');
        }
      });
    } else {
      console.log('NO SESSION ID');
      res.status(200).end();
    }
  }
};