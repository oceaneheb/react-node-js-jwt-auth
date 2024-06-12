import express from 'express'; 
import cors from 'cors'; 
import cookieParser from 'cookie-parser'; 
import authRoutes from './routes/authRoutes.js'; 
import tripRoutes from './routes/tripRoutes.js'; 

const app = express(); 
app.use(express.json()); 
app.use(cors({ 
    origin: ["http://localhost:5173"], 
    methods: ["POST", "GET"], 
    credentials: true 
})); 
app.use(cookieParser()); 
app.use(authRoutes); 
app.use(tripRoutes); 

app.listen(8081, () => { 
    console.log("Server running on port 8081..."); 
});

// import express from 'express';
// import mysql from 'mysql2';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import cookieParser from 'cookie-parser';
// const salt = 10;

// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:5173"], //config ordi perso
//     // origin: ["http://localhost:5173"], //config Adrar
//     methods: ["POST", "GET"],
//     credentials: true
// }));
// app.use(cookieParser());

// //Create connexion with mysql database
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Elvis123?",
//     database: "blabladrar"
// })

// //Tester la connexion avec la BDD 
// db.connect((error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("MySQL Connected...");
//     }
// })

// //Inscription
// app.post('/register', (req, res) => {
//     const q = "INSERT INTO users (`prenom`, `nom`, `email`, `password`) VALUES (?)"; //ajouter un champs nom en front
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if(err) return res.json({Error: "Error for hashing password"});
//         const values = [
//             req.body.prenom,
//             req.body.nom,
//             req.body.email,
//             hash
//         ];
//         console.log(values);
//         db.query(q, [values], (err, result) => {
//             if(err) return res.json(err);
//             return res.json({Status: "Success"});
//         })
//     })
// })

// //Connexion
// app.post("/login", (req, res) => {
//     const q = "SELECT * from users WHERE email = ?";

//     db.query(q, [req.body.email], (err, data) => {
//         if(err) return res.json({Error: "Login error in server"});
//         if (data.length > 0) {
//             bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
//                 if(err) return res.json({Error: "Password compare error"});
//                 if(response) {
//                     const email = data[0].email;
//                     const token = jwt.sign({email}, "jwt-secret-key", {expiresIn: '1d'}); //récupère l'email pour créer le token
//                     res.cookie('token', token);
//                     return res.json({Status: "Success"});
//                 } else {
//                     return res.json({Error: "Le mot de passe est incorrect"});
//                 }
//             });
//         } else {
//             return res.json({Error: "Aucun email existe"});
//         }
//     })
// });

// //Vérifier si l'utilisateur est connecté avec le JWT Token
// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if(!token) {
//         return res.json({Error: "Vous n'êtes pas connecté"});
//     } else {
//         jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//             if(err) {
//                 return res.json({Error: "Token n'est pas correct"});
//             } else {
//                 // req.name = decoded.name;
//                 req.email = decoded.email;
//                 next();
//             }
//         })
//     }
// };

// app.get('/home', verifyUser, (req, res) => {
//     // return res.json({Status: "Success", name: req.name, email: req.email});
//     return res.json({Status: "Success", email: req.email});
// });

// //Récupérer les trajets de l'utilisateur connecté
// app.get('/trajets', verifyUser, (req, res) => {
//     // const userId = req.decoded.id
//     const userConnectedEmail = req.email;
//     console.log('email utilisateur connecté : ' + userConnectedEmail);
    
//     const q = "SELECT id FROM users WHERE email = ?";
//     db.query(q, [userConnectedEmail], (err, data) => {
//         if(err) {
//             return res.json({Error: "Impossible de récupérer l'id de l'utilisateur"})
//         } else {
//             if(data.length === 0) {
//                 return res.json({Error: "Utilisateur non trouvé"})
//             }

//             const userId = data[0].id;
//             const sql = "SELECT * FROM trajets WHERE userId = ?";
//             db.query(sql, [userId], (err, results) => {
//                 if(err) {
//                     return res.json({Error: err});
//                 } else {
//                     res.json(results);
//                 }
//             });
//         }
//     })
// });

// //Fonction déconnexion
// app.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     return res.json({Status: "Success"});
// })

// // //Récupérer id de l'utilisateur connecté
// // app.get('/iduserconnected', verifyUser, (req, res) => {
// //     const userConnectedEmail = req.email;
// //     console.log('emailuser: ' + userConnectedEmail);

// //     const sql = "SELECT id FROM users WHERE email = ?";
// //     db.query(sql, [userConnectedEmail], (req, res) => {
// //         if(err) {
// //             return res.json({Error: err});
// //         } else {
// //             res.json(res);
// //         }
// //     })
// // })

// // //Créer un trajet
// // app.post('/addtrip', (req, res) => {
// //     const id = 1;
// //     const values = [
// //         req.body.depart,
// //         req.body.arrivee,
// //         req.body.date,
// //         req.body.nbrplaces,
// //         id
// //     ];
// //     const q = "INSERT INTO trajets (`adresse_depart`, `adresse_arrivee`, `date`, `nombre_places`, `userId`) VALUES (?)"
// //     db.query(q, [values], (err, result) => {
// //         if(err) {
// //             console.log(res.json(err));
// //             return res.json(err);
// //         } else {
// //             return res.json({Status: "Success"});
// //         }
// //     })
// // })

// //Créer un trajet
// app.post('/addtrip', verifyUser, (req, res) => {
//     const userConnectedEmail = req.email;
//     console.log('emailuser: ' + userConnectedEmail);

//     const sql = "SELECT * FROM users WHERE email = ?";
//     db.query(sql, [userConnectedEmail], (err, data) => {
//         if(err) {
//             return res.json({Error: "Impossible de récupérer l'id de l'utilisateur"})

//         } else {
//             if(data.length === 0) {
//                 return res.json({Error: "Utilisateur non trouvé"})
//             }

//             const userId = data[0].id;
//             console.log('userid = ' + userId);
//             const values = [
//                 req.body.depart,
//                 req.body.arrivee,
//                 req.body.date,
//                 req.body.nbrplaces,
//                 userId
//             ];
//             console.log('values = ' + values);

//             const q = "INSERT INTO trajets (`adresse_depart`, `adresse_arrivee`, `date`, `nombre_places`, `userId`) VALUES (?)"
//             db.query(q, [values], (err, result) => {
//                 if(err) {
//                     return res.json(err);
//                 } else {
//                     return res.json({Status: "Success"});
//                 }
//             })
//         }
//     }) 
// })

// app.listen(8081, () => {
//     console.log("Running...");
// })