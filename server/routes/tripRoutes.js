import express from 'express'; 
import { getTrips, addTrip } from '../controllers/tripController.js'; 
import { verifyUser } from '../middleware/verifyUser.js'; 

const router = express();
router.get('/trajets', verifyUser, getTrips); 
router.post('/addtrip', verifyUser, addTrip);
// router.get('/alltrajets', getAllTrips);

export default router;