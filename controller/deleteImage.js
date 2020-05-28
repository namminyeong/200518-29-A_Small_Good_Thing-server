const AWS = require("aws-sdk");

// ! SDK 로딩, (인증 자격 증명 로드)
AWS.config.loadFromPath("config/s3config.json");

module.exports = {
  deleteImage: (req, res) => {
    // ! S3 객체 생성
    let s3 = new AWS.S3();
    const image_file = req;
    const key = image_file.substring(
      image_file.lastIndexOf(".amazonaws.com/") + 15
    );
    let params = {
      Bucket: "asmallgoodthing",
      Key: key,
    };
    s3.deleteObject(params, function(err, data) {
      if (err) {
        res
          .status(500)
          .send("Check if you have sufficient permissions: " + err);
      }
    });
  },
};
