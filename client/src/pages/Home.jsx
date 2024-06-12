import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchUser, fetchTrips, logout } from "../api.js";
// import api from "./api.js"; //importation du service API
import ImgConnexionStagiaire from '../assets/connexion-stagiaire.png';
import ImgConnexionAdmin from '../assets/connexion-admin.png';
import './style/Home.css';


function App() {

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    //Tableau des trajets de l'utilisateur
    const [trips, setTrips] = useState([]);

    const navigate = useNavigate();
    // axios.defaults.withCredentials = true; //supprimer avec la création de api.js

    // //Fonction déconnexion //supprimer avec la création de api.js
    // const handleLogOut = () => {
    //     axios.get('http://localhost:8081/logout')
    //     .then(res => {
    //         location.reload(true);
    //     }).catch(err => console.log(err));
    // }

    const handleLogOut = () => {
        logout()
        .then(() => {
            localStorage.removeItem('token');
            location.reload(true);
        })
        .then(err => console.log(err));
    }

    // useEffect(() => { //supprimer avec la création de api.js
    //     axios.get('http://localhost:8081')
    //     .then(res => {
            
    //         if(res.data.Status === "Success") {
    //             setAuth(true);
    //             setEmail(res.data.email);
    //             // navigate('/home');

    //             //Afficher les trajets de l'utilisateur connecté
    //             axios.get('http://localhost:8081/trajets')
    //             .then(res => {
    //                 setTrips(res.data);
    //                 console.log(res.data);
    //             })
    //             .then(err => console.log(err));

    //         } else {
    //             setAuth(false);
    //             setMessage(res.data.Error);
    //         }
    //     })
    //     .then(err => console.log(err));

        
    // }, []);

    useEffect(() => {
        fetchUser()
        .then(res => {
            
            if(res.data.Status === "Success") {
                setAuth(true);
                setEmail(res.data.email);
                // navigate('/');

                //Afficher les trajets de l'utilisateur connecté
                fetchTrips()
                .then(res => {
                    setTrips(res.data);
                    console.log(res.data);
                })
                .then(err => console.log(err));

            } else {
                setAuth(false);
                setMessage(res.data.Error);
            }
        })
        .then(err => console.log(err));

        
    }, []);

  return (
    <div>
        {
            // auth ?
            <div>
                {/* <h3>Bonjour {name}</h3> */}
                <p>Votre mail : {email}</p>
                {
                    trips.length > 0 ?
                    <ul>
                        {trips.map(trip => (
                            <li key={trip.id}>
                                <p>Adresse de départ : {trip.adresse_depart}</p>
                                <p>Adresse d'arrivée : {trip.adresse_arrivee}</p>
                                <p>Date : {trip.date}</p>
                                <p>Nombre de places : {trip.number_place}</p>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>Vous n'avez aucun trajet</p>
                }
                <Link to="/login" onClick={handleLogOut}>Déconnexion</Link>
            </div>
            // :
            // <div>

            //     <div className="section">
            //         <div className="container">
            //             <div className="div">
            //                 <p>Ou</p>
            //             </div>
            //             <div className="card">
            //                 <h2>Vous êtes stagiaire ?</h2>
            //                 <Link to='/login'>Me connecter</Link>
            //                 <div className="img-card">
            //                     <img src={ImgConnexionStagiaire} alt="" width="200px"/>
            //                 </div>
            //             </div>
            //             <div className="card">
            //                 <h2>Vous êtes administrateur ?</h2>
            //                 <Link to='/login'>Me connecter</Link>
            //                 <div className="img-card">
            //                     <img src={ImgConnexionAdmin} alt="" width="250px"/>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            //     {/* <h3>{message}</h3>
            //     <h3>Se connecter</h3>
            //     <Link to="/login">Se connecter</Link> */}
            // </div>
        }
    </div>
  )
}

export default App
