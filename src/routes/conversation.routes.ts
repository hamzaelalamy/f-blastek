import express from 'express';
import { createConversation, getConversation, getConversationByUser, getConversations, getMessage } from '../controllers/conversation.controller';

const router = express.Router();

router.post('/createConversation', createConversation);

router.get('/getConversations', getConversations);

router.get('/getMessage', getMessage);

router.get('/getConversation/:id', getConversation);

router.get('/getConversationByUser/:id', getConversationByUser);

// router.put('/updateConversation/:id', updateConversation);

export default router;
