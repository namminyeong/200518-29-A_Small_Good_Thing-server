const { users, items } = require("../models");

module.exports = {
  get: (req, res) => {

    let date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth()+1;
    
    const user_id = req.query.user_id;
    users.findOne({where: { id: user_id }})
      .then(user => {
        const user_name = user.dataValues.user_name;
        return user_name;
      }).then(user_name => {
        const items_info = [];
        items.findAll({ where: { user_id: user_id }})
          .then(all_items => {
            all_items.forEach(item => {
              if(Number(item.date.slice(0,4)) === thisYear && Number(item.date.slice(5,7)) === thisMonth) {
                items_info.push(item.dataValues);
              }
            });
            res.status(201).json({monthly_list: { user_name: user_name, items: items_info }});
            res.end();
          });
      }).catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  }
};