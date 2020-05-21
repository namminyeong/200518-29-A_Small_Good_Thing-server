/* eslint-disable no-unused-vars */
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      item_price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      memo: {
        allowNull: true,
        type: Sequelize.STRING(1000),
      },
      link: {
        allowNull: true,
        type: Sequelize.STRING(3000),
      },
      purchased: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      worry: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "images",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("items");
  },
};
