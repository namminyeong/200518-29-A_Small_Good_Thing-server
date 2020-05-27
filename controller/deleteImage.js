// const path = require("path");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const { images } = require("../models");

// ! SDK 로딩, (인증 자격 증명 로드)
AWS.config.loadFromPath("config/s3config.json");

module.exports = {
  deleteImage: (req, res) => {
    console.log(req)
    // ! S3 객체 생성
    let s3 = new AWS.S3();
    const { image_id, image_file } = req;
    const key = image_file.substring(
      image_file.lastIndexOf(".amazonaws.com/") + 15
    );
    let params = {
      Bucket: "asmallgoodthing",
      Key: key,
    };
    s3.deleteObject(params, function(err, data) {
      if (data) {
        images.findOne({ where: { id: image_id, image_file } }).then(() => {
          images.destroy({ where: { id: image_id, image_file } });
        });
      } else {
        res
          .status(500)
          .send("Check if you have sufficient permissions: " + err);
      }
    });
  },
};
