import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
} from "../controllers/reviews.controller";
import verifyToken from "../middleware/authentication";
import adminAuthMiddleware from "../middleware/authorization";
const router = Router();

router.post("/reviews", verifyToken, createReview);
router.get("/reviews", verifyToken, getAllReviews);
router.get("/reviews/:id", verifyToken, getReviewById);
router.put("/reviews/:id", verifyToken, updateReviewById);
router.delete("/reviews/:id", verifyToken, deleteReview);

export default router;
