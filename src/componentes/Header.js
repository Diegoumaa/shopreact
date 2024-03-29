import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( <
        header className = "main-header" >
        <
        nav className = "main-nav" >
        <
        Link className = "nav-link"
        to = "/" > Inicio < /Link> <
        Link className = "nav-link"
        to = "/login" > Iniciar sesión < /Link> <
        Link className = "nav-link"
        to = "/register" > Registrarse < /Link> < /
        nav > <
        /header>
    );
}

export default Header;