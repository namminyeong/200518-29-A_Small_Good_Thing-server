"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("items", [
      {
        item_name: "MacBook",
        item_price: "3000000",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 1,
        category_id: 1,
        image_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("items", null, {});
  },
};
