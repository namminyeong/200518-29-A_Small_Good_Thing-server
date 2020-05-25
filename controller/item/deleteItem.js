const { items, images } = require("../../models");

module.exports = {
  delete: (req, res) => {
    const item_id = req.query.item_id;
    const { user_id, image_id } = req.body;

    let item = items.findOne({ where: { id: item_id, user_id: user_id } });
    let image = images.findOne({ where: { id: image_id } });

    if (!item) {
      res.status(404).send("Cannot find the item");
    } else {
      items
        .destroy({ where: { user_id: user_id, id: item_id } })
        .then(() => {
          if (image) {
            images.destroy({ where: { id: image_id } });
          }
          res.status(202).send("Item has been successfully deleted");
        })
        .catch((err) => {
          console.log("CATCH", err);
          res.status(500).send(err);
        });
    }
  },
};
