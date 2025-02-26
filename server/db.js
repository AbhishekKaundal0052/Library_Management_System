import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize( process.env.DATABASE , process.env.USER , process.env.PASSWORD, {
  host: process.env.HOST || "localhost",
  dialect: "postgres",
  port: process.env.DB_PORT,
});

export default sequelize;
