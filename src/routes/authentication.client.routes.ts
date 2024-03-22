import express from 'express';
import {RegisterClient,LoginClient,Logout} from '../controllers/authentication.client.controllers';
import validateRequest from '../middleware/validationMiddleware'
import isClient from '../middleware/authorization'
import ClientSanitization from '../utils/client.sanitization'
const router = express.Router();

router.post('/auth/RegisterClient',validateRequest,RegisterClient);
router.post('/auth/LoginClient',validateRequest,LoginClient);
router.post('/auth/LogoutClient',validateRequest,Logout);


export default router;