import { getUserByEmail } from '../models/userModel.js'; 
import { getTripsByUserId } from '../models/tripModel.js'; 

export const getTrips = (req, res) => { 
    const userConnectedEmail = req.email; 
    getUserByEmail(userConnectedEmail, (err, data) => { 
        if (err) return res.json({ Error: "Unable to retrieve user ID" }); 
        if (data.length === 0) return res.json({ Error: "User not found" }); 
        const userId = data[0].id; 
        getTripsByUserId(userId, (err, results) => { 
            if (err) return res.json({ Error: err }); 
            return res.json(results); 
        }); 
    }); 
};