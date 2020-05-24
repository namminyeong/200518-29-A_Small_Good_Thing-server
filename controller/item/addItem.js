const { items } = require("../../models");

module.exports = {
  post: (req, res) => {
    const {
      user_id,
      item_name,
      item_price,
      date,
      memo,
      link,
      purchased,
      worry,
      category_id,
      image_id,
    } = req.body;

    items
      .findOrCreate({
        where: { user_id, item_name, item_price, date },
        defaults: { memo, link, purchased, worry, category_id, image_id },
      })
      .then(([result, create]) => {
        if (!create) {
          res.status(409).send("해당 아이템이 이미 존재해요");
        } else {
          const {
            id,
            item_name,
            item_price,
            date,
            memo,
            link,
            purchased,
            worry,
            user_id,
            category_id,
            image_id,
          } = result.dataValues;
          res.status(201).send({
            id,
            item_name,
            item_price,
            date,
            memo,
            link,
            purchased,
            worry,
            user_id,
            category_id,
            image_id,
          });
        }
      })
      .catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  },
};
