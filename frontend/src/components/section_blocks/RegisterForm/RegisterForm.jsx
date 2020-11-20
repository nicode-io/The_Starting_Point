import React from 'react';
import { FormField } from '../../individuals/FormField/FormField';

export function RegisterForm() {
    return (
        <section>
            <form action="#" method="POST" className="reg_form">
                <FormField label="Nom" type="text" required={true} />
                <FormField label="Prénom" type="text" required={true} />
                <FormField label="Email" type="email" required={true} />
                <FormField label="Tel" type="tel" />
                <FormField label="Société" type="string" />
                <FormField label="Password" type="password" required={true} />
                <FormField label="S'enregistrer" type="submit" />
            </form>
        </section>
    )
}