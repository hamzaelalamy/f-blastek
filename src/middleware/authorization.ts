import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret_key: String | any = process.env.SECRET_KEY;

const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from cookies or headers
  const user = req.body.user;
  // console.log(req.body.user);
  // console.log(token);

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
    // Check if user_type_id is admin
    if (user.user_type_id !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Not an admin' });
    }

    // If the user is admin, allow access to the next middleware/route handler
    next();
  
};

export default adminAuthMiddleware;