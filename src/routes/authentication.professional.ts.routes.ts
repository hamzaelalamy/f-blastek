import express from 'express';
import {registerProfessional,loginProfessional,logoutProfessional} from '../controllers/authentication.professional.controllers';
import validateRequest from '../middleware/validationMiddleware'
import professionalSanitization from '../utils/professional.sanitization'
const router = express.Router();

router.post('/auth/registerProfessional',professionalSanitization,validateRequest,registerProfessional);
router.post('/auth/loginProfessional',professionalSanitization,validateRequest,loginProfessional);
router.post('/auth/logoutProfessional',professionalSanitization,validateRequest,logoutProfessional);


export default router;