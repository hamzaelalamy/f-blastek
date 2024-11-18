import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
  checkProfessionalEmail,
  getProfessionalByEmail,
} from "../controllers/professional.controller";
import ProfessionalSanitization from "../utils/professional.sanitization";
import validateRequest from "../middleware/validationMiddleware";
import verifyToken from "../middleware/authentication";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Professionals
 *   description: API endpoints for managing professionals
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Professional:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the professional
 *         firstName:
 *           type: string
 *           description: First name of the professional
 *         lastName:
 *           type: string
 *           description: Last name of the professional
 *         cin:
 *           type: string
 *           description: National Identity Card number of the professional
 *         email:
 *           type: string
 *           description: Email address of the professional
 *         phoneNumber:
 *           type: string
 *           description: Phone number of the professional
 *         city:
 *           type: string
 *           description: City of residence of the professional
 *         address:
 *           type: string
 *           description: Address of the professional
 *         geolocation:
 *           type: object
 *           description: Geolocation coordinates of the professional
 *         scannedCin:
 *           type: string
 *           description: Scanned copy of the National Identity Card of the professional
 *         photo:
 *           type: string
 *           description: URL of the photo of the professional
 *         specialization:
 *           type: string
 *           description: Specialization of the professional
 *         hourlyRate:
 *           type: number
 *           description: Hourly rate of the professional
 *         bio:
 *           type: string
 *           description: Biography or description of the professional
 *         experiences:
 *           type: array
 *           description: Array of past experiences of the professional
 *           items:
 *             type: string
 *         backgroundCheckCompleted:
 *           type: boolean
 *           description: Indicates whether the background check of the professional is completed
 *         availability:
 *           type: object
 *           description: Availability of the professional
 *           properties:
 *             days:
 *               type: array
 *               description: Days of availability of the professional
 *               items:
 *                 type: string
 *             timeslots:
 *               type: array
 *               description: Timeslots of availability of the professional
 *               items:
 *                 type: string
 *         password:
 *           type: string
 *           description: Password of the professional
 *         payments:
 *           type: array
 *           description: Array of payment records of the professional
 *           items:
 *             type: number
 *         passwordResetToken:
 *           type: string
 *           description: Token for resetting the password of the professional
 *         passwordResetTokenExpires:
 *           type: string
 *           format: date-time
 *           description: Expiry date of the password reset token
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - city
 *         - specialization
 *         - backgroundCheckCompleted
 *         - password
 */

/**
 * @swagger
 * /professionals:
 *   post:
 *     summary: Create a new professional
 *     tags: [Professionals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Professional'
 *     responses:
 *       '201':
 *         description: Professional created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professional'
 *       '400':
 *         description: Bad request, invalid input
 *       '500':
 *         description: Internal server error
 */

router.post(
  "/professionals",
  // ProfessionalSanitization,
  validateRequest,
  createProfessional
);

/**
 * @swagger
 * /professionals:
 *   get:
 *     summary: Get all professionals
 *     tags: [Professionals]
 *     responses:
 *       '200':
 *         description: Returns all professionals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Professional'
 *       '404':
 *         description: No professionals found
 *       '500':
 *         description: Internal server error
 */

router.get("/professionals", getAllProfessionals);

/**
 * @swagger
 * /professionals/{id}:
 *   get:
 *     summary: Get a professional by ID
 *     tags: [Professionals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Professional ID
 *     responses:
 *       '200':
 *         description: Returns the professional with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professional'
 *       '404':
 *         description: Professional not found
 *       '500':
 *         description: Internal server error
 */

router.get("/professionals/:id", getProfessionalById);

/**
 * @swagger
 * /professionals/{id}:
 *   put:
 *     summary: Update a professional by ID
 *     tags: [Professionals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Professional ID
 *       - in: body
 *         name: professional
 *         description: The professional data to update
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Professional'
 *     responses:
 *       '200':
 *         description: Professional updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professional'
 *       '404':
 *         description: Professional not found
 *       '500':
 *         description: Internal server error
 */

router.put(
  "/professionals/:id",
  //verifyToken,
  //ProfessionalSanitization,
  validateRequest,
  updateProfessionalById
);

/**
 * @swagger
 * /professionals/{id}:
 *   delete:
 *     summary: Delete a professional by ID
 *     tags: [Professionals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Professional ID
 *     responses:
 *       '204':
 *         description: Professional deleted successfully
 *       '404':
 *         description: Professional not found
 *       '500':
 *         description: Internal server error
 */

router.delete("/professionals/:id", deleteProfessionalById);

/**
 * @swagger
 * /professionals/check-email-availability/{email}:
 *   get:
 *     summary: Check if an email is available
 *     tags: [Professionals]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address to check
 *     responses:
 *       '200':
 *         description: Email is available
 *       '404':
 *         description: Email is not available
 *       '500':
 *         description: Internal server error
 */

router.get(
  "/professionals/check-email-availability/:email",
  checkProfessionalEmail
);

/**
 * @swagger
 * /professionals/getProfessional/{email}:
 *   get:
 *     summary: Get a professional by email
 *     tags: [Professionals]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address of the professional
 *     responses:
 *       '200':
 *         description: Returns the professional with the specified email
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professional'
 *       '404':
 *         description: Professional not found
 *       '500':
 *         description: Internal server error
 */

router.get("/professionals/getProfessional/:email", getProfessionalByEmail);

export default router;
