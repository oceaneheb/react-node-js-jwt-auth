import jwt from 'jsonwebtoken'; 
const jwtSecret = "jwt-secret-key"; 

//Vérifier si l'utilisateur est connecté avec JWT Token
export const verifyUser = (req, res, next) => { 
    const token = req.cookies.token; 
    if (!token) { 
        return res.status(401).json({ error: "Vous n'êtes pas connecté" });  
    } else { 
        jwt.verify(token, jwtSecret, (err, decoded) => { 
            if (err) { 
                return res.status(403).json({ error: "Token non valide" }); 
            } else { 
                req.email = decoded.email; 
                next(); 
            } 
        }); 
    } 
};