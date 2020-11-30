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
    const [usertype, setUsertype] = useState('user');
    const handleSubmit = ()=>{
        api.insertNew('/add-user',{
            firstname: firstname, 
            lastname: lastname,
            email: email,
            tel: tel,
            password: password,
            company: company,
            usertype: usertype
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <section>
        
            <form onSubmit={handleSubmit} className="reg_form">
            
                <FormField label="Nom" type="text" required={true} callback={fieldValue => setLastname(fieldValue)}/>
            
                <FormField label="Prénom" type="text" required={true} callback={fieldValue => setFirstname(fieldValue)} />
            
                <FormField label="Email" type="email" required={true} callback={fieldValue => setEmail(fieldValue)} />
            
                <FormField label="Tel" type="tel" callback={fieldValue => setTel(fieldValue)} />
            
                <FormField label="Société" type="string" callback={fieldValue => setCompany(fieldValue)} />
            
                <FormField label="Password" type="password" required={true} callback={fieldValue => setPassword(fieldValue)} />
                <FormField label="S'enregistrer" type="submit" />
            </form>
        </section>
    )
}