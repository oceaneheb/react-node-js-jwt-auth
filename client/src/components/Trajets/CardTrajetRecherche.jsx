import React from 'react';
import { Link } from "react-router-dom"
import './style/CardTrajetRecherche.css';

function CardTrajetRecherche({id, adresse_depart, adresse_arrivee, date}) {

    //Récupérer la date du trajet
    const dateString = date;
    const dateObject = new Date(dateString);

    //Récupérer le jour, le mois et l'année
    const day = dateObject.getUTCDate().toString().padStart(2,'0');
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2,"0"); //Les mois sont indexés à partir de 0 (janvier = 0)
    const year = dateObject.getUTCFullYear();

    //Formater la date au format jour-mois-année
    const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="card-trajet-recherche" key={id}>
        <div className="card-trajet-header">
            <div className='rond'></div>
            <p>Trajet quotidien</p>
        </div>
        <div className='card-trajet-body'>
            <img src={imgUtilisateur} alt="" className='img-user'/>
            <div>
                <h4 className="name-user">Proposé par Océane H.</h4>
                <div className='date-trajet'>
                    <FaRegCalendarAlt style={{color: "#65C0ED", fontSize: "17px"}}/>
                    <p className='card-text'>Le {formattedDate}</p>
                </div> 
                <div className='adress'>
                    <div className='adresse-depart'>
                        <div>
                            <FaLocationDot />
                            <h5>Départ</h5>
                        </div>
                        <p>{adresse_depart}</p>
                    </div>
                    <div className='adresse-arrivee'>
                        <div>
                            <FaLocationDot />
                            <h5>Arrivée</h5>
                        </div>
                        <p>{adresse_arrivee}</p>
                    </div>
                </div>
                <Link to={`/trajet/${id}`}>Voir le détail</Link>
            </div>
        </div>
    </div>
  )
}

export default CardTrajetRecherche
