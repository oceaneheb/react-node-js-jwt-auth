import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddTrip from './pages/AddTrip';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Profil from "./pages/Profil";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addtrip' element={<PrivateRoute><AddTrip /></PrivateRoute>}></Route>
        <Route path='/profil' element={<PrivateRoute><Profil /></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
