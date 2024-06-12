import { getUserByEmail } from '../models/userModel.js'; 
import { getTripsByUserId, addTripByUserId } from '../models/tripModel.js'; 

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

export const addTrip = (req, res) => {
    const userConnectedEmail = req.email;
    
    getUserByEmail(userConnectedEmail, (err, data) => { 
        if (err) return res.json({ Error: "Unable to retrieve user ID" }); 
        if (data.length === 0) return res.json({ Error: "User not found" }); 
        const userId = data[0].id;
        const values = [
            req.body.depart,
            req.body.arrivee,
            req.body.date,
            req.body.nbrplaces,
            userId
        ];

        addTripByUserId(values, (err, results) => { 
            if (err) return res.json({ Error: err }); 
            return res.json(results); 
        });
    })
};
