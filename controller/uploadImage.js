const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const { items } = require("../models");

// ! SDK 로딩, (인증 자격 증명 로드)
AWS.config.loadFromPath("config/s3config.json");

module.exports = {
  uploadImage: (req, res) => {
    const item_id = req.query.item_id;
    // ! S3 객체 생성
    let s3 = new AWS.S3();

    let upload = multer({
      storage: multerS3({
        s3: s3,
        bucket: "asmallgoodthing",
        key: function(req, file, cb) {
          let extension = path.extname(file.originalname);
          cb(null, `image/${Date.now().toString()}${extension}`);
        },
        acl: "public-read-write",
      }),
    });

    let uploadSingle = upload.single("image_file");

    uploadSingle(req, res, (err) => {
      if (req.file === undefined || req.file === null) {
        res.end(err.message);
      } else if (req.file) {
        items
          .update({
            image_file: req.file.location,
          },
          {
            where: { id: item_id },
            returning: true,
            plain: true,
          })
          .then(() => {
            res
              .status(200)
              .send({ item_id: item_id ,image_file: req.file.location });
          });
      } else {
        res.status(500).send("Sever error");
      }
    });
  },
};