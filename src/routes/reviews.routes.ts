import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  AverageRating,
} from "../controllers/reviews.controller";
import verifyToken from "../middleware/authentication";
import adminAuthMiddleware from "../middleware/authorization";
const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         clientId:
 *           type: string
 *           description: ID of the client
 *         professionalId:
 *           type: string
 *           description: ID of the professional
 *         rating:
 *           type: number
 *           description: Rating given in the review
 *         description:
 *           type: string
 *           description: Description of the review
 *       required:
 *         - clientId
 *         - professionalId
 *         - rating
 *         - description
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: API endpoints for managing reviews
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       '500':
 *         description: Internal server error
 */
router.post("/reviews", verifyToken, createReview);

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Returns all reviews
 *       '404':
 *         description: No reviews found
 *       '500':
 *         description: Internal server error
 */
router.get("/reviews", verifyToken, getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review
 *     responses:
 *       '200':
 *         description: Returns the review
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Internal server error
 */
router.get("/reviews/:id", verifyToken, getReviewById);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       '200':
 *         description: Returns the updated review
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Internal server error
 */
router.put("/reviews/:id", verifyToken, updateReviewById);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review
 *     responses:
 *       '200':
 *         description: Review deleted successfully
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/reviews/:id", verifyToken, deleteReview);

/**
 * @swagger
 * /reviews/average/{id}:
 *   get:
 *     summary: Get average rating for a professional
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the professional
 *     responses:
 *       '200':
 *         description: Returns the average rating
 *       '500':
 *         description: Internal server error
 */
router.get("/reviews/average/:id", verifyToken, AverageRating);

export default router;
