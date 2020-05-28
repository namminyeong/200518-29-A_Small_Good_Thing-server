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
        type: DataTypes.DATEONLY,
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
        defaultValue: false,
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
      image_file: {
        type: DataTypes.STRING(3000), // TODO: image 저장하는 방법 찾아봐야함
        allowNull: true,
      },
    },
    {}
  );
  items.associate = function(models) {
    // associations can be defined here
  };
  return items;
};
