import { body, ValidationChain } from "express-validator";

const ProfessionalSanitization: ValidationChain[] = [
    body("firstName").notEmpty().trim().escape(),
    body("lastName").notEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("city").notEmpty().trim().escape(),
    body("address").trim().escape(),
    body("specialization").trim().escape(),
    body("hourlyRate").isNumeric(),
    body("bio").trim().escape(),
    body("backgroundCheckCompleted").isBoolean(),
    body("password").isStrongPassword(),

];

export default ProfessionalSanitization;