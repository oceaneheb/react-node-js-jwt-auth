import React, { useEffect, useState } from 'react';
import { fetchUser, fetchTrips } from "../api.js";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TrajetProfil from '../components/Trajets/TrajetProfil.jsx';
import './style/Profil.css';

function Profil() {

    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');

    //Tableau des trajets de l'utilisateur
    const [trips, setTrips] = useState([]);

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
    <div id="profile-page">
        <Navbar />
        <section id='section-profil'>
            <div className="container-profil">
                <div className='grid-container'>
                <div class="container" id="info-personnelles">
                    <h3>Infos personnelles</h3>
                    <div className='container-content'>
                        <div class='infos-utilisateur'>
                            <p>Océane H.</p>
                            <p>Session : CDA31 23-01</p>
                            <button>Modifier la photo de profil</button>
                        </div>
                        <div className='img-utilisateur'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div class="container" id="biographie">
                    <h3>Biographie</h3>
                    <div className='container-content'>
                        <div>
                            <p>Bonjour, moi c’est Laura. Je recherche une ou plusieurs personnes pour faire du covoiturage depuis Blagnac. </p>
                            <button>Modifier ma bio</button>
                        </div>
                    </div>
                </div>
                <div class="container" id="trajets-crees">
                    <h3>Mes trajets</h3>
                    <div className='list-trajets'>
                        {
                            trips.length > 0 ?
                            <ul>
                                {trips.map(trip => (
                                    <TrajetProfil key={trip.id} adresse_depart={trip.adresse_depart} adresse_arrivee={trip.adresse_arrivee} date={trip.date}/>
                                ))}
                            </ul>
                            :
                            <p>Vous n'avez aucun trajet</p>
                        }
                    </div>
                </div>
                <div class="container" id="badges-gagnes">
                    <h3>Mes badges</h3>
                    
                </div>

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
                    } */}
                </div>
                
                {/* <Link to="/login" onClick={handleLogOut}>Déconnexion</Link> */}
            </div>
        </section>
        
        <Footer />
    </div>
  )
}

export default Profil
