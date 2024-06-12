import mysql from 'mysql2';
//Charger les variables d'environnement
import 'dotenv/config';

//Create connexion with mysql database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Tester la connexion avec la BDD 
db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected...");
    }
});

export default db;