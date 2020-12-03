import './registerForm.css';
import React, { useState, useEffect } from 'react';
import { FormField } from '../../individuals/FormField/FormField';
import api from '../../../api';

export function RegisterForm() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = ()=>{
        api.insertNew('/add-user',{
            firstname: firstname, 
            lastname: lastname,
            email: email,
            tel: tel,
            password: password,
            company: company,
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <section class={"register-form"}>
            <form onSubmit={handleSubmit} className="reg_form">
                <article className={"register-field"}>
                    <p><label>Prénom</label></p>
                    <p><input type="text" placeholder="Prénom" required={true} callback={fieldValue => setFirstname(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Nom</label></p>
                    <p><input type="text" placeholder="Nom"required={true} callback={fieldValue => setLastname(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Société</label></p>
                    <p><input type="string" placeholder="Société (si applicable)"callback={fieldValue => setCompany(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Email</label></p>
                    <p><input type="email" placeholder="Email"required={true} callback={fieldValue => setEmail(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>N° Téléphone</label></p>
                    <p><input type="tel" placeholder="Numéro de téléphone" callback={fieldValue => setTel(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Mot de passe</label></p>
                    <p><input type="password" placeholder="Choisir un mot de passe" required={true} callback={fieldValue => setPassword(fieldValue)} /></p>
                </article>
                <article className={"register-submit"}>
                    <p><input className={"register-btn"} label={"submit"} type={"submit"} value={"S'enregistrer"} /></p>
                </article>
            </form>
        </section>
    )
}