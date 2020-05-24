const router = require("express").Router();
const { itemcontroller } = require("../controller");

// router.get("/", (req, res) => {
//   res.status(200).send("");
// });

// * POST /item
router.post("/", itemcontroller.addItem.post);

module.exports = router;
