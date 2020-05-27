const router = require("express").Router();
const { multiDelete } = require("../controller");

// * DELETE /items
router.delete("/", multiDelete.delete);

module.exports = router;