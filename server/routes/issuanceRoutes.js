import express from "express";
import issuanceController from "../controllers/issuanceController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

// Routes for Issuance
router.post("/issuance", authenticate, issuanceController.createIssuance);
router.get("/issuance/:id", authenticate, issuanceController.getIssuance);
router.get("/issuances", authenticate, issuanceController.getAllIssuances);
router.put("/issuance/:id", authenticate, issuanceController.updateIssuance);

export default router;


