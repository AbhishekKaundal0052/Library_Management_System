const sequelize = require("../config/database");
const Member = require("./Member");
const Membership = require("./Membership");
const Collection = require("./Collection");
const Category = require("./Category");
const Book = require("./Book");
const Issuance = require("./Issuance");

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");

    await sequelize.sync({ alter: true });
    console.log("Models synced with DB!");
  } catch (error) {
    console.error("Error syncing DB:", error);
  }
};

syncDB();

module.exports = {
  Member,
  Membership,
  Collection,
  Category,
  Book,
  Issuance,
};
