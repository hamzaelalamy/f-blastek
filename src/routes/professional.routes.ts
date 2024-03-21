import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
} from "../controllers/Professional.controller";
import createProfessionalValidation from "../utils/professional.sanitization";
import validateRequest from "../middleware/validationMiddleware";

const router = Router();

router.post(
  "/professionals",
  createProfessionalValidation,
  validateRequest,
  createProfessional
);

router.get("/professionals", getAllProfessionals);

router.get("/professionals/:id", getProfessionalById);

router.put(
  "/professionals/:id",
  createProfessionalValidation,
  validateRequest,
  updateProfessionalById
);

router.delete("/professionals/:id", deleteProfessionalById);

export default router;
