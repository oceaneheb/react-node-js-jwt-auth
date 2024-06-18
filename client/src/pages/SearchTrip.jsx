import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CardTrajetRecherche from '../components/Trajets/CardTrajetRecherche.jsx';
// import { fetchAllTrips } from '../api.js';
import { FaLocationDot } from "react-icons/fa6"
import "./style/SearchTrip.css";


function SearchTrip() {

    //Stocker tous les trajets
    const [trajets, setAllTrajets] = useState([]);

    // useEffect(() => {
    //     fetchAllTrips()
    //     .then(res => {
    //         console.log(res.data);
    //         setAllTrajets(res.data);
            
    //     })
    //     .catch(err => console.log(err));
    // }, []);

  return (
    <div>
        <Navbar />
        <section id='list__trip'>
            <div>
                <h3 className='listTrajet' >Tous les trajets</h3>
                {
                    trajets > 0 ?
                        <div className='trajets'>
                            {trajets.map((trajet) => {
                                return (
                                    <CardTrajetRecherche id={trajet.id} adresse_depart={trajet.adresse_depart} adresse_arrivee={trajet.adresse_arrivee} date={trajet.date} />
                                )
                            })}
                        </div>
                    : 
                    <p>Il n'y a aucun trajet dans la BDD</p>
                }
                
                <button className='btn'><Link to="/add">Créer un trajet</Link></button>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default SearchTrip
