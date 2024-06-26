import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './style/Login.css';
import ImgConnexionStagiaire from '../assets/connexion-stagiaire.png';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                localStorage.setItem("token", res.data.token);
                navigate('/home');
            } else {
                alert(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }

  return (
    <div className="section">
        <div className="container">
            <div className="img-login">
                <img src={ImgConnexionStagiaire} alt="" width='400px'/>
            </div>
            <div className="form-login">
                <h2>Connexion Stagiaire</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Entrez votre email" name="email" onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" placeholder="Entrez votre mot de passe" name="password" onChange={e => setValues({...values, password: e.target.value})}/>
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
                <Link to='/' className="back">Retour</Link>
            </div>
        </div>
    </div>
  )
}

export default Login

