import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";
import memberRoutes from "./routes/memberRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import issuanceRoutes from "./routes/issuanceRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Middleware
app.use("/api", memberRoutes);
app.use("/api", bookRoutes);
app.use("/api", issuanceRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}/`);
});
sequelize.sync()
  .then(() => console.log("✅ Database Synced"))
  .catch((error) => console.error("❌ Database Connection Error:", error));