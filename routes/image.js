const router = require("express").Router();

const { imagecontroller } = require("../controller");

// * POST /image
router.post("/", imagecontroller.uploadImage);

router.get("/", (req, res) => {
  res.status(200).send("get image success");
});

module.exports = router;
