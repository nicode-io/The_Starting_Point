import React from 'react';
import { FormField } from '../..';

export function ProductForm(props) {
    // props.edit = true/false
    return (
        <section>
            <form>
                {(typeof props.edit !== 'undefined' && props.edit) ? "Modifier" : "Ajouter"}
                
                <FormField label="Name" type="text" />
                
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}