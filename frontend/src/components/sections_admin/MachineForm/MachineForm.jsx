import React from 'react';
import { FormField } from '../..';

export function MachineForm(props) {
    // props.edit = true/false
    return (
        <section>
            <form>
                {(typeof props.edit !== 'undefined' && props.edit) ? "Modifier" : "Ajouter"}
                
                <FormField label="Name" type="text" />
                <FormField label="Tarif" type="number" />
                <FormField label="Oui" type="radio" name="Disponibilite" />
                <FormField label="Non" type="radio" name="Disponibilite" />
                <FormField label="Commentaires" type="textarea" />
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}