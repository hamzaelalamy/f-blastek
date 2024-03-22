import express from 'express';
import {RegisterClient,LoginClient,Logout} from '../controllers/authentication.client.controllers';
import validateRequest from '../middleware/validationMiddleware'
import isClient from '../middleware/authorization'
import ClientSanitization from '../utils/client.sanitization'
const router = express.Router();

router.post('/auth/RegisterClient',ClientSanitization,validateRequest,RegisterClient);
router.post('/auth/LoginClient',ClientSanitization,validateRequest,LoginClient);
router.post('/auth/LogoutClient',ClientSanitization,validateRequest,Logout);


export default router;