const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("your_database", "your_user", "your_password", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
