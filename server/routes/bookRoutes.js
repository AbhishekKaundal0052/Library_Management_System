import express from "express";
import bookController from "../controllers/bookController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

// Routes for books
router.post("/book", authenticate, bookController.createBook);
router.get("/book/:id", authenticate, bookController.getBook);
router.get("/books", authenticate, bookController.getAllBooks);
router.put("/book/:id", authenticate, bookController.updateBook);

export default router;
