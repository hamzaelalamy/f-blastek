import express from 'express';
import {
    createClient,
    getAllClients,
    getClientById,
    updateClientById,
    deleteClientById,
} from '../controllers/client.controller';
import ClientSanitization from "../utils/client.sanitization";
import validateRequest from "../middleware/validationMiddleware";
import adminAuthMiddleware from '../middleware/authorization';
import verifyToken from '../middleware/authentication';

const router = express.Router();

router.post('/clients',  ClientSanitization, validateRequest,createClient);
router.get('/clients', 
//verifyToken,
 getAllClients);
router.get('/clients/:id', verifyToken, getClientById);
router.put('/clients/:id', verifyToken, updateClientById);
router.delete('/clients/:id', verifyToken, deleteClientById);

export default router;