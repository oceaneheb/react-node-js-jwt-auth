import express from 'express'; 
import { getTrips } from '../controllers/tripController.js'; 
import { addTrip } from '../controllers/tripController.js';
import { verifyUser } from '../middleware/verifyUser.js'; 

// const router = express.Router();
const router = express();
router.get('/trajets', verifyUser, getTrips); 
router.post('/addtrip', verifyUser, addTrip);

export default router;