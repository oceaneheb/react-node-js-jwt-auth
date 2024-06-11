import db from '../config/db.js'; 

export const getTripsByUserId = (userId, callback) => { 
    const q = "SELECT * FROM trajets WHERE userId = ?"; 
    db.query(q, [userId], (err, results) => { 
        if (err) return callback(err); 
        callback(null, results); 
    }); 
};