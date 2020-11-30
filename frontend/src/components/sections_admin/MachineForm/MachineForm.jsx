import React , {useState , useEffect}from 'react';
import { FormField } from '../..';

import api from '../../../api';

export function MachineForm(props) {
    const [name , setName] = useState('');
    const [tarif , setTarif] = useState('');
    const [disponibilite , setDisponibilite] = useState('');
    const [commentaires , setCommentaires] = useState('');
    const handleAvailability = (availability) => {
        (availability === "Oui") ? setDisponibilite(true) : setDisponibilite(false);
    }
    const handleSubmit = () => {
        props.edit = 'Ajouter';
        api.insertNew('/add-machine',{
            name : name,
            tarif : tarif,
            available : disponibilite,
            comment : commentaires
        }).then((response) =>{
            console.log(response);
        }, (error) => {
            console.log(error);
        });
        
    }
    
    
    return (
        <section>
            <form onSubmit={handleSubmit} className="log-form">
                {(typeof props.edit !== 'undefined' && props.edit) ? "Modifier" : "Ajouter"}
                
                <FormField label="Name" type="text" callback={fieldValue => setName(fieldValue)}/>
                <FormField label="Tarif" type="number" callback={fieldValue => setTarif(fieldValue)}/>
                <FormField label="Oui" type="radio" name="Disponibilite" callback={fieldValue => handleAvailability(fieldValue)}/>
                <FormField label="Non" type="radio" name="Disponibilite" callback={fieldValue => handleAvailability(fieldValue)} />
                <FormField label="Commentaires" type="textarea" callback={fieldValue => setCommentaires(fieldValue)}/>
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}