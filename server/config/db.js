import mysql from 'mysql2';

//Create connexion with mysql database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
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