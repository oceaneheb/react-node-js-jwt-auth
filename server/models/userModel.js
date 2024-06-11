import db from '../config/db.js'; 

//Récupérer l'utilisateur par son email
export const getUserByEmail = (email, callback) => { 
    const q = "SELECT * FROM users WHERE email = ?"; 
    db.query(q, [email], (err, data) => { 
        if (err) return callback(err); 
        callback(null, data); 
    }); 
}; 

//Créer un nouvel utilisateur
export const createUser = (user, callback) => { 
    const q = "INSERT INTO users (`prenom`, `nom`, `email`, `password`) VALUES (?)"; 
    db.query(q, [user], (err, result) => { 
        if (err) return callback(err); 
        callback(null, result);
    }); 
};