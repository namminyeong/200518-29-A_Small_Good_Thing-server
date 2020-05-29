const router = require("express").Router();
const { itemcontroller } = require("../controller");

// * POST /item
router.post("/", itemcontroller.addItem.post);

// * DELETE /item?item_id=${item_id}
router.delete("/:item_id?", itemcontroller.deleteItem.delete);

// * PATCH /item?item_id=${item_id}
router.patch("/:item_id?", itemcontroller.editItem.patch);

// * GET /item?item_id=${item_id}
router.get("/:item_id?", itemcontroller.showItem.get);

module.exports = router;
