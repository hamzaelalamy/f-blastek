import express from 'express';
import {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
} from '../controllers/admin.controller';
import verifyToken from '../middleware/authentication';
import adminAuthMiddleware from '../middleware/authorization';

const router = express.Router();

router.post('/admins', 
// verifyToken,
//  adminAuthMiddleware,
  createAdmin);
router.get('/admins', 
//verifyToken, adminAuthMiddleware, 
getAllAdmins);
router.get('/admins/:id', verifyToken, adminAuthMiddleware, getAdminById);
router.put('/admins/:id', verifyToken, adminAuthMiddleware, updateAdminById);
router.delete('/admins/:id', verifyToken, adminAuthMiddleware, deleteAdminById);

export default router;
