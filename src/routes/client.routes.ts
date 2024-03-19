import express from 'express';
import {
    createClient,
    getAllClients,
    getClientById,
    updateClientById,
    deleteClientById,
} from '../controllers/client.controller';

const router = express.Router();

router.post('/clients', createClient);
router.get('/clients', getAllClients);
router.get('/clients/:id', getClientById);
router.put('/clients/:id', updateClientById);
router.delete('/clients/:id', deleteClientById);

export default router;