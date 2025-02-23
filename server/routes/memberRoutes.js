import express from "express";
import memberController from "../controllers/memberController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

// Routes for members
router.post("/member", authenticate, memberController.createMember);
router.get("/member/:id", authenticate, memberController.getMember);
router.get("/members", authenticate, memberController.getAllMembers);
router.put("/member/:id", authenticate, memberController.updateMember);

export default router;
