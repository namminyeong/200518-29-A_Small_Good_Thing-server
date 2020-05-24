const router = require("express").Router();
const { usercontroller } = require("../controller");

// * POST /login
router.post("/login", usercontroller.login.post);

// * POST /logout
router.post("/logout", usercontroller.logout.post);

// * POST /signup
router.post("/signup", usercontroller.signup.post);

module.exports = router;
