import {createIntervention} from '../controllers/intervention.controller'

import  express  from 'express';

const router = express.Router();



router.post('/intervention',createIntervention);
export default router;
