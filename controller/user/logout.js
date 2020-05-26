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
          res.redirect('/');
          res.end();
        }
      });
    } else {
      console.log('NO SESSION ID');
      res.redirect('/');
      res.end();
    }
  }
};