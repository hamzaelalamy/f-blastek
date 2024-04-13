import {createIntervention,getAllInterventions,updateInterventionById,deleteInterventiontById} from '../controllers/intervention.controller'

import  express  from 'express';

const router = express.Router();



router.post('/createIntervention',createIntervention);
router.get('/getAllInterventions',getAllInterventions);
router.put('/updateInterventionById/:id',updateInterventionById);
router.delete('/deleteInterventiontById/:id',deleteInterventiontById);
export default router;
