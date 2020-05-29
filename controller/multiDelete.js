const { items } = require("../models");
const { deleteImage } = require("./deleteImage");

module.exports = {
  delete: (req, res) => {
    const { user_id, multipleItems } = req.body;
    
    items.findAll({ where: { id: multipleItems, user_id: user_id } })
      .then(items_info => {
        if (items_info === null) {
          res.status(404).send("Cannot find the item");
        } else {
          const images_file = [];
          items_info.forEach(element => {
            if (element.dataValues.image_file !== null) {
              images_file.push(element.dataValues.image_file);
            }
          });
          items
            .destroy({ where: {  id: multipleItems, user_id: user_id } })
            .then(() => {
              if (images_file.length !== 0) {
                images_file.forEach(url => {
                  deleteImage(url);// ! S3 & RDS
                });
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
