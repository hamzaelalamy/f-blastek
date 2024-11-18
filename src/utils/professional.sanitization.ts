import { body, ValidationChain } from "express-validator";

const ProfessionalSanitization: ValidationChain[] = [
  body("firstName")
    .notEmpty()
    .trim()
    .escape()
    .withMessage("first name is required"),
  body("lastName")
    .notEmpty()
    .trim()
    .escape()
    .withMessage("first name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid password"),
  body("city")
    .notEmpty()
    .trim()
    .escape()
    .withMessage("city name is required")
    .optional(),
  body("address").trim().escape(),
  body("specialization").trim().escape().optional(),
  body("hourlyRate")
    .optional()
    .isNumeric()
    .withMessage("hourly rate should be a number"),
  body("bio").trim().escape(),
  body("backgroundCheckCompleted").optional().isBoolean(),
  body("password")
    .isStrongPassword()
    .withMessage(
      "Password  is weak you should use Uppercase and number and caracters "
    ),
];

export default ProfessionalSanitization;
