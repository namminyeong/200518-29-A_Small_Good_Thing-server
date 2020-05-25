const router = require("express").Router();
const { getTotalList } = require("../controller");

// * GET /total_list?user_id=${user_id}
router.get("/:user_id?", getTotalList.get);

module.exports = router;
