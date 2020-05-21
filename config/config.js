/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "goodthing_dev",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "goodthing_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "goodthing_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
};
