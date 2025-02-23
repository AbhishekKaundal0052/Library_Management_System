import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Member from "./memberModel.js";

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

export default Membership;
