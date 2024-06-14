import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchUser, fetchTrips, logout } from "../api.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import IllustrationCar from '../assets/illustration-voiture.png';
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
    <div id="home-page">
        {/* <div> */}
            <Navbar />
            <section id="section">
                {/* <h2>Pour vos trajets du quotidien pensez au covoiturage !</h2> */}
                <div className='content-home'>
                <div className="div">
                    <p>Ou</p>
                </div>

                    <div className='card'>
                        <h3>Vous cherchez un covoiturage</h3>
                        <form>
                            <div className="form-group">
                                <label>Départ <span>*</span></label>
                                <input type="text" placeholder='Adresse de départ'/>
                            </div>
                            <div className="form-group">
                                <label>Arrivée <span>*</span></label>
                                <input type="text" placeholder="Adresse d'arrivée"/>
                            </div>
                        </form>
                        <div className="link">
                            <Link to='/trajets'>Rechercher un trajet</Link>
                        </div>
                    </div>

                    <div className='card'>
                        <h3>Vous proposez un trajet</h3>
                        <div>
                            <img src={IllustrationCar} alt="Illustration du covoiturage" width="300px"/>
                        </div>
                        <div className="link">
                            <Link to='/addtrip'>Créer un trajet</Link>
                        </div>
                    </div>

                </div>
                <Link to="/login" onClick={handleLogOut}>Déconnexion</Link>
            </section>
            <Footer />

            {/* <h3>Bonjour {name}</h3>
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
             */}
        {/* </div> */}
    </div>
  )
}

export default App
