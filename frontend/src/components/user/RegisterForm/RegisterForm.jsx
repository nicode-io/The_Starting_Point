import './registerForm.css';
import React, { useState } from 'react';
import { FormField } from '../../commons/FormField/FormField';
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
        <section className={"register-form"}>
            {/* <form onSubmit={handleSubmit} className="reg_form">
                <FormField label="Nom" type="text" required={true} callback={fieldValue => setLastname(fieldValue)}/>
            
                <FormField label="Prénom" type="text" required={true} callback={fieldValue => setFirstname(fieldValue)} />
            
                <FormField label="Email" type="email" required={true} callback={fieldValue => setEmail(fieldValue)} />
            
                <FormField label="Tel" type="tel" callback={fieldValue => setTel(fieldValue)} />
            
                <FormField label="Société" type="string" callback={fieldValue => setCompany(fieldValue)} />
            
                <FormField label="Password" type="password" required={true} callback={fieldValue => setPassword(fieldValue)} />
                <FormField label="S'enregistrer" type="submit" />
            </form> */}
            <form onSubmit={handleSubmit} className="reg_form">
                <article className={"register-field"}>
                    <p><label>Prénom</label></p>
                    <p><input type="text" placeholder="Prénom" required={true} onChange={fieldValue => setFirstname(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Nom</label></p>
                    <p><input type="text" placeholder="Nom"required={true} onChange={fieldValue => setLastname(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Société</label></p>
                    <p><input type="string" placeholder="Société (si applicable)"onChange={fieldValue => setCompany(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Email</label></p>
                    <p><input type="email" placeholder="Email"required={true} onChange={fieldValue => setEmail(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>N° Téléphone</label></p>
                    <p><input type="tel" placeholder="Numéro de téléphone" onChange={fieldValue => setTel(fieldValue)} /></p>
                </article>
                <article className={"register-field"}>
                    <p><label>Mot de passe</label></p>
                    <p><input type="password" placeholder="Choisir un mot de passe" required={true} onChange={fieldValue => setPassword(fieldValue)} /></p>
                </article>
                <article className={"register-submit"}>
                    <p><input className={"register-btn"} label={"submit"} type={"submit"} value={"S'enregistrer"} /></p>
                </article>
            </form>
        </section>
    )
}