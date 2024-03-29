import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js'; // actualizado
import Login from './componentes/Login.js'; // actualizado
import Register from './componentes/Register.js'; // actualizado
import Header from './componentes/Header.js'; // actualizado
import './App.css'; // Esto importa los estilos de App.css


function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> < /
        Routes > <
        /div> < /
        Router >
    );
}

export default App;