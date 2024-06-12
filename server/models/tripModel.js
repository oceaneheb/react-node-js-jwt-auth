import db from '../config/db.js'; 

export const getTripsByUserId = (userId, callback) => { 
    const q = "SELECT * FROM trajets WHERE userId = ?"; 
    db.query(q, [userId], (err, results) => { 
        if (err) return callback(err); 
        callback(null, results); 
    }); 
};

export const addTripByUserId = (values, callback) => { 
    const q = "INSERT INTO trajets (`adresse_depart`, `adresse_arrivee`, `date`, `nombre_places`, `userId`) VALUES (?)" 
    db.query(q, [values], (err, results) => { 
        if (err) return callback(err); 
        callback(null, results); 
    }); 
};