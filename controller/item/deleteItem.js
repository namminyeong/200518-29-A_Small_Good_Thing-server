const { items, images } = require("../../models");
const { deleteImage } = require("../deleteImage");

module.exports = {
  delete: (req, res) => {
    const item_id = req.query.item_id;
    const { user_id, image_id, image_file } = req.body;
    
    items.findOne({ where: { id: item_id, user_id: user_id } })
      .then(result => {
        if(result === null){
          res.status(404).send("Cannot find the item");
        } else {
          items
            .destroy({ where: {  id: item_id, user_id: user_id } })
            .then(() => {
              if (req.body.image_id) {
                const image_info = { image_id: image_id, image_file: image_file };
                deleteImage(image_info); // ! S3 & RDS
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
