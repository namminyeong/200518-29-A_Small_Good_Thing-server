const { items } = require("../../models");
const { deleteImage } = require("../deleteImage");

module.exports = {
  delete: (req, res) => {
    const item_id = req.query.item_id;
    const { user_id, image_file } = req.body;
    
    items.findOne({ where: { id: item_id, user_id: user_id } })
      .then(result => {
        if(result === null){
          res.status(404).send("Cannot find the item");
        } else {
          items
            .destroy({ where: {  id: item_id, user_id: user_id } })
            .then(() => {
              console.log(req.body.image_file);
              if (req.body.image_file) {
                deleteImage(image_file); // ! S3 & RDS
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
