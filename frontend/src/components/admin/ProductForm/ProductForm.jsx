import React ,{ useState }from 'react';
import { FormField } from '../../commons';
import api from '../../../api';

export function ProductForm(props) {
    const [name , setName] = useState('');
    const [category , setCategory] = useState('');
    const [tarif , setTarif] = useState('');
    const [stock , setStock] = useState('');
    
    const handleSubmit = () => {
        
        api.insertNew('/add-product',{
            name : name,
            tarif : tarif,
            category : category,
            stock : stock
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
                <FormField label="Category" type="text" callback={fieldValue => setCategory(fieldValue)}/>
                <FormField label="Stock" type="number" callback={fieldValue => setStock(fieldValue)}/>
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}