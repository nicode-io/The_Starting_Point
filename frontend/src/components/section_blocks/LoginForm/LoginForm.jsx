import React, { useState } from 'react';
import { FormField } from '../..';
import './loginForm.css';
import api from '../../../api';

const LoginForm = () =>{
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSubmit = ()=>{
        api.getBy('/auth', userEmail,{
            email: userEmail, 
            password: userPassword
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.error(error);
            
        });
    }

    return(
        <section className={"login-form"}>
            <form onSubmit={handleSubmit}>
                <article className={"login-field"}>
                    <p><label>E-mail</label></p>
                    <p><input type="email" placeholder="Email" required={true} onChange={e => setUserEmail(e.target.value)}/></p>
                </article>
                <article className={"login-field"}>
                    <p><label>Mot de passe</label></p>
                    <p><input type="password" placeholder={"Mot de passe"} required={true} onChange={e => setUserPassword(e.target.value)}/></p>
                </article>
                <article className={"login-submit"}>
                    <p><input label={"submit"} type={"submit"} value={"Se connecter"} /></p>
                </article>
            </form>
        </section>
    )
};

export {
    LoginForm
};