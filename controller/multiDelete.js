const { items, images } = require("../models");
const { deleteImage } = require("./deleteImage");

module.exports = {
  delete: (req, res) => {
    const { user_id, multipleItems } = req.body;
    console.log(multipleItems)
    
    items.findAll({ where: { id: multipleItems, user_id: user_id } })
      .then(result => {
        console.log(result)
        if(result === null){
          res.status(404).send("Cannot find the item");
        } else {
          items
            .destroy({ where: {  id: multipleItems, user_id: user_id } })
            .then(() => {
              if (req.body.image_id) {
                //const image_info = { image_id: image_id, image_file: image_file };
                //deleteImage(image_info); // ! S3 & RDS
              }
              res.status(202).send("Item has been successfully deleted");
            });
        }
      }).catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  },
};
