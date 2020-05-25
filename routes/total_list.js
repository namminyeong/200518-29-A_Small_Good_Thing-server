const router = require("express").Router();
const { getTotalList } = require("../controller");

// * GET /total_list
router.get("/", getTotalList.get);

module.exports = router;
