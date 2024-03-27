
import { body, ValidationChain } from "express-validator";

const ClientSanitization: ValidationChain[] = [
    // body("firstName").notEmpty().trim().escape(),
    //body("lastName").notEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    //body("city").notEmpty().trim().escape(),
    body("address").trim().escape(),
    //body("geoLocation").isObject(),
    body("scannedCIN").trim().escape(),
    body("photo").trim().escape(),
    // body("password").isStrongPassword(),
];

export default ClientSanitization;