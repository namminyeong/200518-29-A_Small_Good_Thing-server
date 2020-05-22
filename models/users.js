/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 10],
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 15],
        },
      },
    },
    {
      hooks: {
        beforeCreate: (data, options) => {
          var shasum = crypto.createHmac(
            "sha256",
            String(process.env.SHASUM_SECRET)
          );
          shasum.update(data.password);
          data.password = shasum.digest("hex");
        },
      },
    }
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
