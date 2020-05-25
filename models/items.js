"use strict";
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define(
    "items",
    {
      item_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      item_price: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY, // TODO: search format
        allowNull: false,
      },
      memo: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING(3000),
        allowNull: true,
      },
      purchased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, //TODO: can it be true or false // or 1 or 1?
        allowNull: false,
      },
      worry: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      image_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "images",
          key: "id",
        },
      },
    },
    {}
  );
  // items.associate = function(models) {
  //   // associations can be defined here
  // };
  return items;
};
