
import { body, ValidationChain } from "express-validator";

const ClientSanitization: ValidationChain[] = [
    body("firstName").notEmpty().trim().escape().withMessage("first name is required"),
    body("lastName").notEmpty().trim().escape().withMessage("first name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Invalid password"),
    body("city").notEmpty().trim().escape().withMessage("city name is required"),
    body("address").trim().escape(),
    body("geoLocation").isObject(),
    body("scannedCIN").trim().escape(),
    body("photo").trim().escape(),
    body("password").isStrongPassword().withMessage("Password  is weak you should use Uppercase and number and caracters "),
];

export default ClientSanitization;