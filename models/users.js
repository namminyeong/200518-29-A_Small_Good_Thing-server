"use strict";

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
    {}
  );
  // users.associate = function(models) {
  //   // associations can be defined here
  // };
  return users;
};
