import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify({ username, password }));
        console.log('Inicio de sesión:', username, password);
        // Redireccionar al usuario a la página de inicio o donde corresponda
    };

    return ( <
        div className = "login-container" >
        <
        form className = "login-form"
        onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Nombre de usuario: < /label> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        /> <
        /div> <
        div className = "form-group" >
        <
        label > Contraseña: < /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /div> <
        button type = "submit"
        className = "submit-button" > Iniciar sesión < /button> <
        /form> <
        /div>
    );
}

export default Login;