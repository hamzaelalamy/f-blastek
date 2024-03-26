import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
} from "../controllers/professional.controller";
import ProfessionalSanitization from "../utils/professional.sanitization";
import validateRequest from "../middleware/validationMiddleware";

const router = Router();

router.post(
  "/professionals",
  ProfessionalSanitization,
  validateRequest,
  createProfessional
);

router.get("/professionals", getAllProfessionals);

router.get("/professionals/:id", getProfessionalById);

router.put(
  "/professionals/:id",
  ProfessionalSanitization,
  validateRequest,
  updateProfessionalById
);

router.delete("/professionals/:id", deleteProfessionalById);

export default router;
