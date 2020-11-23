import React from 'react';
import { FormField } from '../..';
import './loginForm.css';

const LoginForm = () =>{
     
    return (
        
        <section className="log_form">
            <form action="#" method="POST" className="log_form">
                <FormField label="Email" type="email" required={true} />
                <FormField label="Password" type="password" required={true} />
                <FormField label="Login" type="submit" />
            </form>
        </section>
    )

};

export {
    LoginForm
};