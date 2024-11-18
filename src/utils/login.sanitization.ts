
import { body, ValidationChain } from "express-validator";

const loginSanitization: ValidationChain[] = [
   
    body("email").isEmail().normalizeEmail().withMessage("Invalid password"),
   // body("password").isStrongPassword().withMessage("Password  is weak you should use Uppercase and number and caracters "),
];

export default loginSanitization;