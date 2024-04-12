import express from 'express';
import {registerClient,verifyEmailClient,loginClient,logoutClient,forgotPasswordClient,resetPasswordClient} from '../controllers/authentication.client.controllers';
import validateRequest from '../middleware/validationMiddleware'
import ClientSanitization from '../utils/client.sanitization'
import loginSanitization from '../utils/login.sanitization'
const router = express.Router();

router.post('/auth/registerClient',ClientSanitization,validateRequest,registerClient);
router.get('/auth/verifyEmailClient/:token',verifyEmailClient);
router.post('/auth/loginClient',loginSanitization,validateRequest,loginClient);
router.post('/auth/logoutClient',loginSanitization,validateRequest,logoutClient);
router.post('/auth/forgotPasswordClient',forgotPasswordClient);
router.patch('/auth/resetPasswordClient/:token',resetPasswordClient);


export default router;