import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
import { getUserByEmail, createUser } from '../models/userModel.js'; 
const salt = 10; 
const jwtSecret = "jwt-secret-key"; 

//Inscription d'un utilisateur
export const register = (req, res) => { 
    const { prenom, nom, email, password } = req.body; 
    bcrypt.hash(password.toString(), salt, (err, hash) => { //ajout de toString()
        if (err) return res.json({ Error: "Error hashing password" }); 
        const newUser = [prenom, nom, email, hash]; 
        createUser(newUser, (err, result) => { 
            if (err) return res.json(err); 
            return res.json({ Status: "Success" }); 
        }); 
    }); 
}; 

//Connexion d'un utilisateur
export const login = (req, res) => { 
    const { email, password } = req.body; 
    getUserByEmail(email, (err, data) => { 
        if (err) return res.json({ Error: "Login error in server" });
        if (data.length > 0) { 
            bcrypt.compare(password.toString(), data[0].password, (err, response) => { //ajout de toString()
                if (err) return res.json({ Error: "Password compare error" }); 
                if (response) { 
                    const email = data[0].email;
                    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1d' }); 
                    res.cookie('token', token); 
                    return res.json({ Status: "Success" }); 
                } else { 
                    return res.json({ Error: "Le mot de passe est incorrect" }); 
                } 
            }); 
        } else { 
            return res.json({ Error: "Aucun email n'existe" }); 
        } 
    }); 
}; 

//Déconnexion d'un utilisateur
export const logout = (req, res) => { 
    res.clearCookie('token'); 
    return res.json({ Status: "Success" }); 
};