const router = require("express").Router();
const { itemcontroller } = require("../controller");

// * POST /item
router.post("/", itemcontroller.addItem.post);

module.exports = router;
