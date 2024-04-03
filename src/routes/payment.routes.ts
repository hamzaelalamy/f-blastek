import express from 'express';
import {getCheckoutSession,paymentSuccess,paymentFailed} from '../controllers/payment.controllers'

const router = express.Router();

router.post('/payment',getCheckoutSession);
router.get('/paymentSuccess',paymentSuccess);
router.get('/paymentFaild',paymentFailed);
export default router;