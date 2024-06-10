import React, { useEffect, useState } from "react";

function App() {

    const [auth, setAuth] = false;
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');


    useEffect(() => {
        axios.get('/')
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true);
                setName(res.data.name);
                navigate('/login');
            } else {
                setAuth(false);
                setMessage(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }, []);

  return (
    <div>
        {
            auth ?
            <div>
                <h3>Bonjour {name}</h3>
                <button onClick={handleLogout}>Déconnexion</button>
            </div>
            :
            <div>
                <h3>{message}</h3>
                <h3>Se connecter</h3>
                <Link to="/login">Se connecter</Link>
            </div>
        }
    </div>
  )
}

export default App
