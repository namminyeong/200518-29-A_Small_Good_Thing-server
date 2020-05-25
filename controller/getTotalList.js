const { items } = require("../models");
const { users } = require('../models');

module.exports = {
  get: (req, res) => {
    const user_id = req.query.user_id;
    users.findAll({where: { id: user_id }})
      .then(result => {
        const user_name = result[0].dataValues.user_name;
        return user_name;
      }).then(user_name => {
        const item = [];
        items.findAll({where: { user_id: user_id }})
          .then(result => {
            result.forEach(element => {
              item.push(element.dataValues);
            });
            res.status(201).json({total_list: { user_name: user_name, items: item }});
            res.end();
          });
      });
  }
};