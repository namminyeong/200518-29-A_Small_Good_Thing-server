const router = require("express").Router();
const { getMonthlyList } = require("../controller");

// * GET /monthly_list/:user_id
router.get("/", getMonthlyList.get);

module.exports = router;
