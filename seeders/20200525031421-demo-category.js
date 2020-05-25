"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        category_name: "카테고리1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "카테고리2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "카테고리3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "카테고리4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "카테고리5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
