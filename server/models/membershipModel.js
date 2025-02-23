const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Member = require("./memberModel");

const Membership = sequelize.define("Membership", {
  membership_id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
},
  member_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
  status: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
}, { tableName: "membership", timestamps: false });

Membership.belongsTo(Member, { foreignKey: "member_id" });

module.exports = Membership;
