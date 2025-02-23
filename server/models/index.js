import sequelize from "../db.js";
import Member from "./memberModel.js";
import Membership from "./membershipModel.js";
import Collection from "./collectionModel.js";
import Category from "./categoryModel.js";
import Book from "./bookModel.js";
import Issuance from "./issuanceModel.js";

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

export default {
  Member,
  Membership,
  Collection,
  Category,
  Book,
  Issuance,
};
