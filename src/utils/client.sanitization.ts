
import { body, ValidationChain } from "express-validator";

const ClientSanitization: ValidationChain[] = [
    body("firstName").notEmpty().trim().escape().withMessage("first name is required"),
    body("lastName").notEmpty().trim().escape().withMessage("first name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Invalid email"),
    body("city").notEmpty().trim().escape().withMessage("city name is required"),
    body("address").trim().escape(),
    body("geoLocation").isObject().optional(),
    body("scannedCIN").trim().escape().optional(),
    body("photo").trim().escape(),
    body("password").isStrongPassword().withMessage("Password  is weak you should use Uppercase and number and caracters "),
];

export default ClientSanitization;
