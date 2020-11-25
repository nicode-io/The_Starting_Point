import React from 'react';
import { FormField } from '../..';

export function ProductForm(props) {
    // props.edit = true/
    console.log(props);
    return (
        <section>
            
            <form action="./insertNew/Product" method="">
                {(typeof props.edit !== 'undefined' && props.edit) ? "Modifier" : "Ajouter"}
                
                <FormField label="Name" type="text" />
                
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}