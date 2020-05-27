const { items } = require("../../models");
const { checkToken } = require('../../modules');

module.exports = {
  get: (req, res) => {
    const token_info = checkToken(req);
    const { user_id } = token_info;
    const item_id = req.query.item_id;
    
    items.findOne({where: { id: item_id, user_id: user_id }})
      .then(item_info => {
        res.status(201).json(item_info);
      }).catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  }
};