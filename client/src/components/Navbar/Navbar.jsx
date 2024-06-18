import React from 'react';
import './Navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoPoleNumerique from '../../assets/logo-pole-numerique.png'

function NavBar() {

    let currentUrl = window.location.href;

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar-logo">
            <img src={LogoPoleNumerique} alt="Logo en couleurs du Pôle Numérique de l'Adrar" />
        </div>
        <ul className="navbar-links">
            <li className={`navbar-item ${currentUrl == "http://localhost:5173/home" ? "active" : ""}`}>
                <Link to="/home" className="navbar-link">Accueil</Link>
            </li>
            <li className={`navbar-item ${currentUrl == "http://localhost:5173/searchtrajet" ? "active" : ""}`}>
                <Link to="/searchtrajet" className="navbar-link">Rechercher un trajet</Link>
            </li>
            <li className={`navbar-item ${currentUrl == "http://localhost:5173/addtrip" ? "active" : ""}`}>
                <Link to="/addtrip" className="navbar-link">Créer un trajet</Link>
            </li>
            <li className="navbar-item">
                <Link to="" className="navbar-link">Infos utiles</Link>
            </li>
            <li className="navbar-item">
                <Link to="" className="navbar-link">Messagerie</Link>
            </li>
            <li className={`navbar-item ${currentUrl == "http://localhost:5173/profil" ? "active" : ""}`}>
                <Link to="/profil" className="navbar-link">Profil</Link>
            </li>
        </ul>
        <button className='navbar-burger' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
        </button>
    </nav>
  )
}

export default NavBar
