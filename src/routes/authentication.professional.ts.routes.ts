import express from 'express';
import {registerProfessional,loginProfessional,logoutProfessional} from '../controllers/authentication.professional.controllers';
import validateRequest from '../middleware/validationMiddleware'
import professionalSanitization from '../utils/professional.sanitization'
import loginSanitization from '../utils/login.sanitization'
const router = express.Router();

router.post('/auth/registerProfessional',professionalSanitization,validateRequest,registerProfessional);
router.post('/auth/loginProfessional',loginSanitization,validateRequest,loginProfessional);
router.post('/auth/logoutProfessional',loginSanitization,validateRequest,logoutProfessional);


export default router;