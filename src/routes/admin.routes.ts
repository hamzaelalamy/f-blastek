import express from 'express';
import {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
} from '../controllers/admin.controller';

const router = express.Router();

router.post('/admins', createAdmin);
router.get('/admins', getAllAdmins);
router.get('/admins/:id', getAdminById);
router.put('/admins/:id', updateAdminById);
router.delete('/admins/:id', deleteAdminById);

export default router;
