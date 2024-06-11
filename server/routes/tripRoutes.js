import express from 'express'; 
import { getTrips } from '../controllers/tripController.js'; 
import { verifyUser } from '../middleware/verifyUser.js'; 

// const router = express.Router();
const router = express();
router.get('/trajets', verifyUser, getTrips); 

export default router;