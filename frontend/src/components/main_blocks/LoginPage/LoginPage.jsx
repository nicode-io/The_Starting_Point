import React from 'react';
import { LoginForm } from '../..';
import './loginPage.css';

const LoginPage = () => {
    return (
        <main>
            <section className={"login-header"}>
                <h1>Connexion</h1>
            </section>
            <LoginForm />
        </main>
    )
}

export  {
    LoginPage
};
