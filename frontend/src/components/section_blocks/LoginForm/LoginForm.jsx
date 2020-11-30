import React, { useState, useEffect} from 'react';
import { FormField } from '../..';
import './loginForm.css';
import api from '../../../api';

const LoginForm = () =>{
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSubmit = ()=>{
        api.getBy('/authe', userEmail,{
            email: userEmail, 
            password: userPassword
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.error(error);
            
        });
    }

    return (
        
        <section className="log_form">
            <form onSubmit={handleSubmit} className="log_form">
                <FormField label="Email" type="email" required={true} callback={fieldValue => setUserEmail(fieldValue)}/>
                <FormField label="Password" type="password" required={true} callback={fieldValue => setUserPassword(fieldValue)}/>
                <FormField label="Login" type="submit" />
            </form>
        </section>
    )

};

export {
    LoginForm
};