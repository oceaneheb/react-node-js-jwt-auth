import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
        <div>
            <div>
                <h2>Créer un trajet</h2>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        </div>
    )
}

export default AddTrip
