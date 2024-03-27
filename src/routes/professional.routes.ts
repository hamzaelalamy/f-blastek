import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
} from "../controllers/Professional.controller";
import ProfessionalSanitization from "../utils/professional.sanitization";
import validateRequest from "../middleware/validationMiddleware";
import verifyToken from "../middleware/authentication";
import adminAuthMiddleware from "../middleware/authorization";

const router = Router();

router.post(
  "/professionals",
  ProfessionalSanitization,
  validateRequest,
  createProfessional
);

router.get("/professionals", verifyToken, getAllProfessionals);

router.get("/professionals/:id", getProfessionalById);

router.put(
  "/professionals/:id",
  ProfessionalSanitization,
  validateRequest,
  updateProfessionalById
);

router.delete("/professionals/:id", deleteProfessionalById);

export default router;
