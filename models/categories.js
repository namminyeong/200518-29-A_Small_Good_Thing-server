"use strict";

module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "categories",
    {
      category_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {}
  );
  // categories.associate = function(models) {
  //   // associations can be defined here
  // };
  return categories;
};
