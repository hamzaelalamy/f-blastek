import { body, ValidationChain } from "express-validator";

const ProfessionalSanitization: ValidationChain[] = [
    body("firstName").notEmpty().trim().escape(),
    body("lastName").notEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("city").notEmpty().trim().escape(),
    body("address").notEmpty().trim().escape(),
    body("specialization").notEmpty().trim().escape(),
    body("hourlyRate").isNumeric(),
    body("bio").notEmpty().trim().escape(),
    body("backgroundCheckCompleted").isBoolean(),
];

export default ProfessionalSanitization;