import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Validation middleware function
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    // Check for validation errors
    const errors = validationResult(req);
    
    // If there are validation errors, return them
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // If no errors, proceed to the next middleware
    next();
};

export default validateRequest;
