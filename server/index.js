import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

//Create connexion with mysql database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

//Tester la connexion avec la BDD 
db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected...");
    }
})

//Inscription
app.post('/register', (req, res) => {
    const q = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"});
        const values = [
            req.body.name,
            req.body.email,
            hash
        ];
        console.log(values);
        db.query(q, [values], (err, result) => {
            if(err) return res.json(err);
            return res.json({Status: "Success"});
        })
    })
})

//Connexion
app.post("/login", (req, res) => {
    const q = "SELECT * from user WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login error in server"});
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Password compare error"});
                if(response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"});
                } else {
                    return res.json({Error: "Le mot de passe est incorrect"});
                }
            });
        } else {
            return res.json({Error: "Aucun email existe"});
        }
    })
})

app.listen(8081, () => {
    console.log("Running...");
})