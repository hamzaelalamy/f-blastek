import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret_key: String | any = process.env.SECRET_KEY;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from cookies or headers
    const token = req.cookies.user_token;
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    console.log(token);
    
    // Verify the token
    jwt.verify(token, secret_key, (err: any, decoded: any) => {
        if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        req.body.user = decoded;
        // If the token is valid, allow access to the next middleware/route handler
        next();
    });
    }

export default verifyToken;