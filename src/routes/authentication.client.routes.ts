import express from 'express';
import {RegisterClient,LoginClient,Logout} from '../controllers/authentication.client.controllers';

const router = express.Router();

router.post('/auth/RegisterClient',RegisterClient);
router.post('/auth/LoginClient',LoginClient);
router.post('/auth/LogoutClient',Logout);


export default router;