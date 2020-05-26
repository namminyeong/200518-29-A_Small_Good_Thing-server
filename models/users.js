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
        afterValidate: (data, options) => {
          let salt = "forSecret";
          let cipher = crypto.createCipher("aes-256-cbc", salt);
          let result = cipher.update(data.password, "utf8", "base64");
          result += cipher.final("base64");
          data.password = result;
        },
      },
    }
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
