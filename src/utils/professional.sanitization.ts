import { NextFunction } from "express";
import { body } from "express-validator";

const sanitize = (next: NextFunction) => {
    [
        body("firstName").notEmpty().trim().escape(),
        body("lastName").notEmpty().trim().escape(),
        body("email").isEmail().normalizeEmail(),
        body("city").notEmpty().trim().escape(),
        body("address").notEmpty().trim().escape(),
        body("specialization").notEmpty().trim().escape(),
        body("hourlyRate").isNumeric(),
        body("bio").notEmpty().trim().escape(),
        body("backgroundCheckCompleted").isBoolean(),
      ]
      next();
    }

    export default sanitize;