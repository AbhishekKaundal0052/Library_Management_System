import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Collection = sequelize.define(
  "Collection",
  {
    collection_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    collection_name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  },
  { tableName: "collection", timestamps: false }
);

export default Collection;
