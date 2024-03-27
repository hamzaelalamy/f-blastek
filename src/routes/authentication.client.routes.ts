import express from 'express';
import {registerClient,loginClient,logoutClient} from '../controllers/authentication.client.controllers';
import validateRequest from '../middleware/validationMiddleware'
import ClientSanitization from '../utils/client.sanitization'
const router = express.Router();

router.post('/auth/RegisterClient',ClientSanitization,validateRequest,registerClient);
router.post('/auth/LoginClient',ClientSanitization,validateRequest,loginClient);
router.post('/auth/LogoutClient',ClientSanitization,validateRequest,logoutClient);


export default router;