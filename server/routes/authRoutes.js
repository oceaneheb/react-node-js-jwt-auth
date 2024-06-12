import express from 'express'; 
import { register, login, logout } from '../controllers/authController.js'; 
import { verifyUser } from '../middleware/verifyUser.js'; 

// const router = express.Router(); 
const router = express(); 

router.post('/register', register); 
router.post('/login', login); 
router.get('/logout', logout); 

router.get('/home', verifyUser, (req, res) => {
    return res.json({Status: "Success", email: req.email});
});

export default router;