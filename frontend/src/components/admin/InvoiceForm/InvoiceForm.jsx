// IL FAUDRA RECUP POUR LES INVOICES ( USER ou Personne qui reserve 
//                                     une RESERVATION (menu deroulant avec les reservs)
//                                     Une MACHINE QUI EST DANS LA RESERVATION DEJA
//                                      PRODUCTS (optionnel))
// IMPORT
import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { FormField } from '../../commons';


// LE COMPONENT
export function InvoiceForm(props){
    // VAR & HOOKS
    const [user, setUser] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [products, setProducts] = useState([]);

    // METHOD FOR GET ALL RESERVATION
    async function getAllReservations(){
        await api.getAll('/reservations')
        .then((data) =>{
            setReservations(data.data);
        },
        (error) => {
            console.log(error);
        }
        )
    }

    useEffect( () => {
        getAllReservations();
    }, []);
    //RETURN AKA RENDER
    return (
        <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
            <form>
                <select name="reservationPicker" onChange={props.onChange}>
                    <option value="" >Choisir une machine</option>
                    {reservations.map(reservation => (
                        <option key={"option-" + reservation._id} value={reservation._id} name={reservation._id}>
                            {reservation.usernotlogged} {reservation.machine.name}
                        </option>
                    ))}
                </select>
            </form>
                    {console.log(reservations)}
                    
                
        </section>
    )







}