import express from 'express';
import {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
} from '../controllers/service.controller';

const router = express.Router();

router.post('/service', createService);
router.get('/service', getAllServices);
router.get('/service/:id', getServiceById);
router.put('/service/:id', updateServiceById);
router.delete('/service/:id', deleteServiceById);

export default router;