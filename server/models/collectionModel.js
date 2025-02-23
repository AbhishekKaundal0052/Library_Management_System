const { DataTypes } = require("sequelize");
const sequelize = require("../db");

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

module.exports = Collection;
