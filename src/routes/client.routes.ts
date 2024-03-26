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

const router = express.Router();

router.post('/clients', createClient);
router.get('/clients', ClientSanitization, validateRequest, getAllClients);
router.get('/clients/:id', getClientById);
router.put('/clients/:id', updateClientById);
router.delete('/clients/:id', deleteClientById);

export default router;