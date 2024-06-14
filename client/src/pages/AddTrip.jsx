import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import './style/AddTrip.css';
import { FaLocationDot } from "react-icons/fa6";

function AddTrip() {

    const [values, setValues] = useState({
        depart: '',
        arrivee: '',
        date: '',
        nbrplaces: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true; //supprimer avec la création de api.js


    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        axios.post('http://localhost:8081/addtrip', values)
        .then(res => {
            console.log(res);
            if(res.status >= 200 && res.status < 300) {
                navigate('/home');
            } else {
                alert("Error");
            }
        })
        .catch(err => handleError(err));
    }
    const handleError = (err) => {
        if (err.response) {
            if (err.response.status === 401 || err.response.status === 403) {
                alert('Vous n\'êtes pas connecté ou votre session a expiré.');
                navigate('/login');
            } else {
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('An error occurred. Please try again.');
        }
    }

    // const handleSubmit = (event) => {
    //     console.log(values);
    //     event.preventDefault();

    //     axios.get('http://localhost:8081/iduserconnected')
    //     .then(res => {
    //         console.log(res.data);
    //         if(res.data > 0) {
    //             console.log(res.data);

    //             return axios.post('http://localhost:8081/addtrip', values);
    //         } else {
    //             throw new Error("User id not found or invalid");
    //         }
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //         if(res.data.Status === "Success") {
    //             navigate('/');
    //         } else {
    //             alert('Error');
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         alert("An error occured: "+err.message);
    //     })
    // }

    return (
        <div id="create-trip-page">
            <Navbar />
            <section id="section-create-trip">
                <div>
                    <h2>Créer un trajet</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-section">

                            {/* Section : Fréquence du trajet */}
                            <h4>Itinéraire</h4>
                            <hr />
                            
                            {/* Fréquence du trajet */}
                            <div className="form-section-item">
                                <h5>Fréquence</h5>
                                <div className="form-check">
                                    <input type="radio" name="frequency" id="trajet-quotidien" value="Trajet quotidien"/>
                                    <label htmlFor="trajet-quotidien">Trajet quotidien</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" name="frequency" id="trajet-ponctuel" value="Trajet ponctuel"/>
                                    <label htmlFor="trajet-ponctuel">Trajet ponctuel</label>
                                </div>
                            </div>

                            {/* Adresse départ et adresse arrivée */}
                            <div className="form-section-item">
                                <h5>Point de passage</h5>
                                <div className="form-group">
                                    <div className="form-group-label">
                                        <div><FaLocationDot fill="#65C0ED"/></div>
                                        <label htmlFor="depart">Départ</label>
                                    </div>
                                    <input type="text" placeholder="Adresse de départ" name="depart" onChange={e => setValues({...values, depart: e.target.value})} required/>
                                </div>
                                <div className="form-group">
                                <div className="form-group-label">
                                        <div><FaLocationDot fill="#65C0ED"/></div>
                                        <label htmlFor="arrivee">Arrivée</label>
                                    </div>
                                    <input type="text" placeholder="Adresse d'arrivée" name="arrivee" onChange={e => setValues({...values, arrivee: e.target.value})} required/>
                                </div>
                            </div>
                        </div>

                        {/* Section : Date et Heure */}
                        <div className="form-section">
                            <h4>Date et Heure</h4>
                            <hr />

                            <div className="form-section-item">
                                <div className="form-group">
                                    <label htmlFor="date">Quel jour partez-vous ?</label>
                                    <input type="date" placeholder="date" name="date" onChange={e => setValues({...values, date: e.target.value})} required/>
                                </div>
                            </div>
                            <div className="form-section-item">
                                <div className="form-group">
                                    <label htmlFor="time">A quelle heure partez-vous ?</label>
                                    <input type="time" className='form-control' name='time' />
                                </div>
                            </div>
                        </div>

                        {/* Section : Informations complémentaires */}
                        <div className="form-section">
                            <h4>Informations complémentaires</h4>
                            <hr />

                            {/* Nombre de places */}
                            <div className="form-section-item">
                                <div className="form-group">
                                    <label htmlFor="nbrplaces">Nombre de places</label>
                                    <input type="number" placeholder="Nombre de places" name="nbrplaces" onChange={e => setValues({...values, nbrplaces: e.target.value})} min="1" required/>
                                </div>
                            </div>
                        </div>

                        {/* Section : Commentaires */}
                        <div className="form-section">
                            <h4>Commentaires</h4>
                            <hr />
                            <div>
                                <textarea className="comments" rows="5" name="" id="" placeholder="Ecrire un commentaire..."></textarea>
                            </div>
                        </div>

                        {/* Section : Contact */}
                        <div className="form-section">
                            <h4>Contact</h4>
                            <hr />

                            <div className="form-section-item">
                                <div className="form-group">
                                    <input type="tel" name="phone" pattern='[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}' placeholder='Numéro de téléphone (optionnel)'/>
                                </div>
                            </div>
                            <div className="form-section-item">
                                <div className="form-check">
                                    <input type="checkbox" name="onlyByMessage"/>
                                    <label htmlFor="onlyByMessage">Je souhaite être contacté uniquement via la messagerie de l'application</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Ajouter le trajet</button>
                    </form>
                    
                    
                    {/* <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="depart">Départ</label>
                            <input type="text" placeholder="Adresse de départ" name="depart" onChange={e => setValues({...values, depart: e.target.value})} />
                        </div>
                        <div>
                            <label htmlFor="arrivee">Arrivée</label>
                            <input type="text" placeholder="Adresse d'arrivée" name="arrivee" onChange={e => setValues({...values, arrivee: e.target.value})} />
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" placeholder="date" name="date" onChange={e => setValues({...values, date: e.target.value})} />
                        </div>
                        <div>
                            <label htmlFor="nbrplaces">Nombre de places</label>
                            <input type="number" placeholder="Nombre de places" name="nbrplaces" onChange={e => setValues({...values, nbrplaces: e.target.value})} />
                        </div>
                        <button type="submit">Ajouter le trajet</button>
                    </form> */}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AddTrip
