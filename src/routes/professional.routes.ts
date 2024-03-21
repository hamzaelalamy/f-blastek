import { Request, Response, Router } from "express";
import {createProfessional,
    getAllProfessionals,
    getProfessionalById,
    updateProfessionalById,
    deleteProfessionalById} from '../controllers/Professional.controller'

const router = Router();

router.post('/professionals', createProfessional);

router.get('/professionals',getAllProfessionals);

router.get('/professionals/:id',getProfessionalById);

router.put('/professionals/:id',updateProfessionalById);

router.delete('/professionals/:id',deleteProfessionalById);



export default router;