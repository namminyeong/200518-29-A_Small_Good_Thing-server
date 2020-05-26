const router = require("express").Router();
const { itemcontroller } = require("../controller");

// * POST /item
router.post("/", itemcontroller.addItem.post);

// * DELETE /item?item-id=${item_id}
router.delete("/:item_id?", itemcontroller.deleteItem.delete);

// * PATCH /item?item-id=${item_id}
router.patch("/:item_id?", itemcontroller.editItem.patch);

router.get("/:item_id?", (req, res) => {
  res.status(200).send("get success");
});
module.exports = router;
