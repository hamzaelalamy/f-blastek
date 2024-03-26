import express from 'express';
import {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
} from '../controllers/admin.controller';
import adminAuthMiddleware from '../middleware/authorization';

const router = express.Router();

router.post('/admins', adminAuthMiddleware, createAdmin);
router.get('/admins', adminAuthMiddleware, getAllAdmins);
router.get('/admins/:id', adminAuthMiddleware, getAdminById);
router.put('/admins/:id', adminAuthMiddleware, updateAdminById);
router.delete('/admins/:id', adminAuthMiddleware, deleteAdminById);

export default router;
