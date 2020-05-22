const router = require('express').Router();
const { usercontroller } = require('../controller');


// * POST /login
router.post('/login', usercontroller.login.post);

// // * POST /signout
// router.post('/logout', (req, res) => {
//   logout(req, res);
// });

// // * POST /signup
// router.post('/signup', (req, res) => {
//   signup(req, res);
// });

module.exports = router;
