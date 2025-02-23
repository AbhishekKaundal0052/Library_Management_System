import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Member from "./memberModel.js";
import Book from "./bookModel.js";

const Issuance = sequelize.define("Issuance", {
    issuance_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    book_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    issuance_date: { 
        type: DataTypes.DATE, 
        allowNull: false
    },
    issuance_member: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    issued_by: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    target_return_date: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    issuance_status: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
}, { tableName: "issuance", timestamps: false });

Issuance.belongsTo(Book, { foreignKey: "book_id" });
Issuance.belongsTo(Member, { foreignKey: "issuance_member" });

export default Issuance;
