const router = require("express").Router();
const { getMonthlyList } = require("../controller");

// * GET /monthly-list?user_id=${user_id}
router.get("/:user_id?", getMonthlyList.get);

module.exports = router;
