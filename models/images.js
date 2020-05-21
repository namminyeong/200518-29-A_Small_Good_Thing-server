"use strict";

module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define(
    "images",
    {
      image_file: {
        type: DataTypes.BLOB("long"), // TODO: image 저장하는 방법 찾아봐야함
        allowNull: false,
      },
    },
    {}
  );
  // images.associate = function(models) {
  //   // associations can be defined here
  // };
  return images;
};
