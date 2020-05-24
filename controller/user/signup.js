const { users } = require("../../models");

module.exports = {
  post: (req, res) => {
    const { email, user_name, password } = req.body;
    users
      .findOrCreate({
        where: { email },
        defaults: { user_name, password },
      })
      .then(([result, create]) => {
        if (!create) {
          res.status(409).send("Already exists user");
        } else {
          const { id, user_name, email, password } = result.dataValues;
          res.status(200).send({ id, user_name, email, password });
        }
      })
      .catch((err) => {
        console.log("CATCH", err);
        res.status(500).send(err);
      });
  },
};
