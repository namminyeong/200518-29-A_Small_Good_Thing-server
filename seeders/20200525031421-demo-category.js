"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        category_name: "노트북",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "옷",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "커피",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
