// LES IMPORTS :p
import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPenSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { FormField } from '../../commons';





export function Invoices() {
    // Var & Hooks
    const [error,setError] = useState();
    const [invoices,setInvoices] = useState([]);
    const [reservations , setReservations] = useState([]);
    
    
    //Method for Get all Reservations.

    async function getAllReservations() {
        await api.getAll(`/reservations`)
        .then((data) => {
            setReservations(data.data);     
        },
        (error) => {
            setError(error);
        }
        )};
    // Method for get all Invoices
    async function getAllInvoices() {
        await api.getAll(`/invoices`)
        .then((data) => {
            console.log(data.data);
            setInvoices(data.data);
            console.log(invoices);
                
        },
        (error) => {
            setError(error);
        }
        )};
    
    // use Effect for refresh state
    useEffect( () => {
        getAllReservations();
        getAllInvoices();
    }, []);
    // Method to call before render
    
    return (
        <Fragment>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <h2 className="text-center">Factures</h2>
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '20%'}} scope="col">Nom</th>
                        <th style={{width: '20%'}} scope="col">Machine</th>
                        <th style={{width: '20%'}} scope="col">Début</th>
                        <th style={{width: '20%'}} scope="col">Fin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(invoices)}
                    {invoices.map(invoice => (
                        <tr key={"list-" + invoice.reservation._id}>
                        <td>{invoice.reservation.usernotlogged}</td>
                        <td>{invoice.reservation.machine}</td>
                        <td>{invoice.reservation.startdate}</td>
                        <td>{invoice.reservation.enddate}</td>
                        </tr>
                        ))};
                    </tbody>
                    </table>
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <h2 className="text-center">Résérvations</h2>
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '20%'}} scope="col">Nom</th>
                        <th style={{width: '20%'}} scope="col">Machine</th>
                        <th style={{width: '20%'}} scope="col">Début</th>
                        <th style={{width: '20%'}} scope="col">Fin</th>
                        <th style={{width: '20%'}} scope="col">Transformer en facture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(reservations)}
                    {reservations.map(reservation => (
                        <tr key={"list-" + reservation._id}>
                        <td>{reservation.usernotlogged}</td>
                        <td>{reservation.machine.name}</td>
                        <td>{reservation.startdate}</td>
                        <td>{reservation.startdate}</td>
                        <td>
                        <FormField type="button" callback={() => api.insertNew('/add-invoice', {
                                                                    reservation:reservation._id,
                                                                })}>
                            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                        </FormField>
                        </td>
                        </tr>
                        ))};
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
}