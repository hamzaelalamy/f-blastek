import express from 'express';
import {registerProfessional,verifyEmailProfessional,loginProfessional,logoutProfessional,forgotPasswordProfessional,resetPasswordProfessional} from '../controllers/authentication.professional.controllers';
import validateRequest from '../middleware/validationMiddleware'
import professionalSanitization from '../utils/professional.sanitization'
import loginSanitization from '../utils/login.sanitization'
const router = express.Router();

router.post('/auth/registerProfessional',professionalSanitization,validateRequest,registerProfessional);
router.get('/auth/verifyEmailProfessional/:token',verifyEmailProfessional);
router.post('/auth/loginProfessional',loginSanitization,validateRequest,loginProfessional);
router.post('/auth/logoutProfessional',loginSanitization,validateRequest,logoutProfessional);
router.post('/auth/forgotPasswordProfessional',forgotPasswordProfessional);
router.patch('/auth/resetPasswordProfessional/:token',resetPasswordProfessional);

export default router;