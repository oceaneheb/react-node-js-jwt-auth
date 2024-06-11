import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
                navigate('/');
            } else {
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }

  return (
    <div>
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Entrez votre email" name="email" onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" placeholder="Entrez votre mot de passe" name="password" onChange={e => setValues({...values, password: e.target.value})}/>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    </div>
  )
}

export default Login

