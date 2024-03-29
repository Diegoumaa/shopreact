import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de registro
        localStorage.setItem('user', JSON.stringify({ username, password }));
        console.log('Registro:', username, password);
        // Aquí deberías redirigir al usuario a la página de inicio o de perfil
    };

    return ( <
        div className = "register-container" >
        <
        form className = "register-form"
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
        className = "submit-button" > Registrarse < /button> <
        /form> <
        /div>
    );
}

export default Register;