const router = require("express").Router();

const { imagecontroller, deleteImage } = require("../controller");

// * POST /image
router.post("/", imagecontroller.uploadImage);

router.get("/", (req, res) => {
  res.status(200).send("get image success");
});

// * DELETE /image
router.delete("/", deleteImage.deleteImage);

module.exports = router;
