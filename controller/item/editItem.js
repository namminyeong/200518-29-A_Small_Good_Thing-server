const { items } = require("../../models");

module.exports = {
  patch: (req, res) => {
    const item_id = req.query.item_id;
    const {
      user_id,
      item_name,
      item_price,
      memo,
      link,
      purchased,
      date,
      worry,
      category_id,
    } = req.body;

    let item = items.findOne({ where: { id: item_id, user_id: user_id } });
    if (!item) {
      res.status(404).send("Cannot find the item");
    } else {
      items
        .update(
          {
            item_name,
            item_price,
            memo,
            link,
            purchased,
            date,
            worry,
            category_id,
          },
          {
            where: { user_id: user_id, id: item_id },
            returning: true,
            plain: true,
          }
        )
        .then(() => {
          items
            .findOne({ where: { id: item_id, user_id } })
            .then((updatedItem) => {
              res.status(201).json(updatedItem.dataValues);
            });
        })
        .catch((err) => {
          console.log("CATCH", err);
          res.status(500).send(err);
        });
    }
  },
};
