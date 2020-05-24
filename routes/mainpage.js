const router = require("express").Router();
const { itemcontroller } = require("../controller");

// const { getMonthlyList } = require("../controller");

// GET /mainpage

// router.get("/*", getMonthlyList.get);

// * POST /mainpage/addItem
router.get("/", (req, res) => {
  res.status(200).send("Mainpage");
});

router.post("/", itemcontroller.addItem.post);

module.exports = router;
