import express from 'express';
import {RegisterClient,LoginClient} from '../controllers/authentication.client.controllers';

const router = express.Router();

router.post('/auth/RegisterClient',RegisterClient);
router.post('/auth/LoginClient',LoginClient);


export default router;