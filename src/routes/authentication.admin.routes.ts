import express from 'express';
import {loginAdmin,logoutAdmin} from '../controllers/authentication.admin.controllers';
import validateRequest from '../middleware/validationMiddleware'
import loginSanitization from '../utils/login.sanitization'
const router = express.Router();


router.post('/auth/loginAdmin',loginSanitization,validateRequest,loginAdmin);
router.post('/auth/logoutAdmin',loginSanitization,validateRequest,logoutAdmin);
// router.post('/auth/forgotPasswordAdmin',);
// router.patch('/auth/resetPasswordAdmin/:token',);


export default router;