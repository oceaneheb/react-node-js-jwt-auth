import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ImgConnexionStagiaire from '../assets/connexion-stagiaire.png';
import ImgConnexionAdmin from '../assets/connexion-admin.png';
import './style/LandingPage.css';

function LandingPage() {
  return (
    <div className="section">
        <div className="container">
            <div className="div">
                <p>Ou</p>
            </div>
            <div className="card">
                <h2>Vous êtes stagiaire ?</h2>
                <Link to='/login'>Me connecter</Link>
                <div className="img-card">
                    <img src={ImgConnexionStagiaire} alt="" width="200px"/>
                </div>
            </div>
            <div className="card">
                <h2>Vous êtes administrateur ?</h2>
                <Link to='/login'>Me connecter</Link>
                <div className="img-card">
                    <img src={ImgConnexionAdmin} alt="" width="250px"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
