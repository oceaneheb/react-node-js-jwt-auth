import React from 'react';
import './TrajetProfil.css';
import { FaLocationDot, FaTrash, FaEye, FaPen} from "react-icons/fa6";


function TrajetProfil({adresse_depart, adresse_arrivee, date}) {
  return (
      <div className='card-trajet'>
        <div className='card-trajet-header'>
            <div className='frequency'>
                <div className="rond"></div>
                <p>Trajet quotidien</p>
            </div>
            <div>
                <FaEye className='picto'/>
                <FaPen fill='green' className='picto'/>
                <FaTrash fill='red' className='picto'/>
            </div>
        </div>
        <div className="card-trajet-content">
            {/* <div>
                <div className='date'>
                    <p>Picto calendrier</p>
                </div>
                <div className="date">{date}</div>
            </div> */}
            <div className='adress'>
                <div>
                    <FaLocationDot />
                </div>
                <p>Adresse de départ : {adresse_depart}</p>
            </div>
            <div className='adress'>
                <div>
                    <FaLocationDot />
                </div>
                <p>Adresse d'arrivée : {adresse_arrivee}</p>
            </div>
        </div>
    </div>
  )
}

export default TrajetProfil
