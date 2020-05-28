const router = require("express").Router();

const { uploadImage, deleteImage } = require("../controller");

// * POST /image?item_id=${item_id}
router.post("/:item_id?", uploadImage.uploadImage);

router.get("/", (req, res) => {
  res.status(200).send("get image success");
});

// * DELETE /image?item_id=${item_id}
router.delete("/:item_id?", deleteImage.deleteImage);

module.exports = router;
