import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
} from "../controllers/Professional.controller";
import validateRequest from "../middleware/validationMiddleware";
import { body } from "express-validator";
import { createProfessionalValidation } from "../utils/professional.sanitization";

const router = Router();

router.post(
  "/professionals",
  createProfessionalValidation,
  validateRequest,
  createProfessional
);

router.get("/professionals", getAllProfessionals);

router.get("/professionals/:id", getProfessionalById);

router.put("/professionals/:id", updateProfessionalById);

router.delete("/professionals/:id", deleteProfessionalById);

export default router;
