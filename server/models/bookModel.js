import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Collection from "./collectionModel.js";
import Category from "./categoryModel.js";

const Book = sequelize.define(
  "Book",
  {
    book_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    book_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    book_cat_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    book_collection_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    book_launch_date: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    book_publisher: { 
        type: DataTypes.STRING,
        allowNull: false 
    },
  },
  { tableName: "book", timestamps: false }
);

Book.belongsTo(Collection, { foreignKey: "book_collection_id" });
Book.belongsTo(Category, { foreignKey: "book_cat_id" });

export default Book;
