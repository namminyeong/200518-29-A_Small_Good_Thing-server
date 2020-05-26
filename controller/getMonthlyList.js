const { items } = require("../models");
const { users } = require('../models');

module.exports = {
  get: (req, res) => {

    let date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth()+1;
    
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
              if(Number(element.date.slice(0,4)) === thisYear && Number(element.date.slice(5,7)) === thisMonth) {
                item.push(element.dataValues);
              }
            });
            res.status(201).json({monthly_list: { user_name: user_name, items: item }});
            res.end();
          });
      }).catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  }
};