module.exports = {
  post: (req, res) => {
    if(req.cookies.token) {
      res.clearCookie("token", {path: '/'});
    }
    res.redirect('/');
    res.end();
  }
};