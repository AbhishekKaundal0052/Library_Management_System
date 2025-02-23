const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Member = sequelize.define(
  "Member",
  {
    mem_id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    mem_name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    mem_phone: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    mem_email: { 
      type: DataTypes.STRING, 
      allowNull: false, unique: true 
    },
  },
  { tableName: "member", timestamps: false }
);

module.exports = Member;
