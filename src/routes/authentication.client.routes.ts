import express from 'express';
import {registerClient,loginClient,logoutClient,forgotPasswordClient,resetPasswordClient} from '../controllers/authentication.client.controllers';
import validateRequest from '../middleware/validationMiddleware'
import ClientSanitization from '../utils/client.sanitization'
const router = express.Router();

router.post('/auth/registerClient',ClientSanitization,validateRequest,registerClient);
router.post('/auth/loginClient',ClientSanitization,validateRequest,loginClient);
router.post('/auth/logoutClient',ClientSanitization,validateRequest,logoutClient);
router.post('/auth/forgotPasswordClient',forgotPasswordClient);
router.patch('/auth/resetPasswordClient/:token',resetPasswordClient);


export default router;