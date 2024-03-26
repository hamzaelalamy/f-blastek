// adminAuthMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const secret_key = 'secret key';

const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from cookies or headers
  const token = req.cookies.user_token || req.headers.authorization?.split(' ')[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, secret_key, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Check if user_type_id is admin
    if (decoded.user_type_id !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Not an admin' });
    }

    // If the user is admin, allow access to the next middleware/route handler
    next();
  });
};

export default adminAuthMiddleware;