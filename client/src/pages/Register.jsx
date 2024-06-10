import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login');
            } else {
                alert("Error");
            }
        })
        .then(err => console.log(err));
    }

  return (
    <div>
        <div>
        <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" placeholder="Entrez votre nom" name="name" onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Entrez votre email" name="email" onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" placeholder="Entrez votre password" name="password" onChange={e => setValues({...values, password: e.target.value})}/>
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    </div>
  )
}

export default Register
