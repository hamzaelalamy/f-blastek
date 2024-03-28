import express from 'express';
import {loginAdmin,logoutAdmin,forgotPasswordAdmin,resetPasswordAdmin} from '../controllers/authentication.admin.controllers';
import validateRequest from '../middleware/validationMiddleware'
import loginSanitization from '../utils/login.sanitization'
const router = express.Router();


router.post('/auth/loginAdmin',loginSanitization,validateRequest,loginAdmin);
router.post('/auth/logoutAdmin',loginSanitization,validateRequest,logoutAdmin);
router.post('/auth/forgotPasswordAdmin',forgotPasswordAdmin);
router.patch('/auth/resetPasswordAdmin/:token',resetPasswordAdmin);


export default router;