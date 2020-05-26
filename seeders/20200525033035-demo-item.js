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
        category_id: 3,
        image_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "iPhone",
        item_price: "1000000",
        date: "2020-05-25",
        memo: "흠..고민",
        link: "this is a fake link",
        user_id: 9,
        category_id: 1,
        image_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "Coffee",
        item_price: "6000",
        date: "2020-05-25",
        memo: "시원한 카페라떼 먹으려다 어제도 먹었으니 패스했다",
        link: "this is a fake link",
        user_id: 16,
        category_id: 10,
        image_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("items", null, {});
  },
};
