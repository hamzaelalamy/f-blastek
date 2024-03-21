
import { body, ValidationChain } from "express-validator";

const createClientValidation: ValidationChain[] = [
    body("firstName").notEmpty().trim().escape(),
    body("lastName").notEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("city").notEmpty().trim().escape(),
    body("address").notEmpty().trim().escape(),
    body("geoLocation").notEmpty().isObject(),
    body("scannedCIN").notEmpty().trim().escape(),
    body("photo").notEmpty().trim().escape(),
    body("password").isStrongPassword(),
];

export default createClientValidation;