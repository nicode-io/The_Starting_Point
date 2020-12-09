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
            setInvoices(data.data);
                
        },
        (error) => {
            setError(error);
        }
        )};
    // Method for good displaying date in invoice & reservations

    function displayDate(dateInJson){
        let date = new Date(dateInJson);
        let string = date.getDate() +"/"+ (date.getMonth() +1) +"/"+ date.getFullYear()+"" ;
        return string;
    }

    function displayHour(dateInJson){
        let date = new Date(dateInJson);
        let string = date.getHours() +"h"+ (date.getMonth() +1);
        return string;
    }
    // use Effect for refresh state
    useEffect( () => {
        getAllReservations();
        getAllInvoices();
    }, []);
    // Method for transform Reservation to Invoice
    async function transformToInvoice(reservationId, machineId){
        let txt;
        if (window.confirm(`Voulez vous transformer cette résérvation en facture ?`)) {
                txt = true;
            } else {
                txt = false;
            }
            if(txt){
                const machineSelected = await api.getById('/machine', machineId);
                await api.insertNew('/add-invoice', {
                    reservation:reservationId,
                    machineUseInInvoice:machineSelected.data.name
                });
                window.location.reload(false);
            }
    }
    
    return (
        <Fragment>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <h2 className="text-center">Factures</h2>
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '20%'}} scope="col">Nom</th>
                        <th style={{width: '20%'}} scope="col">Machine</th>
                        <th style={{width: '20%'}} scope="col">Date</th>
                        <th style={{width: '20%'}} scope="col">Horaires</th>
                        </tr>
                    </thead>
                    <tbody>
                    {invoices.map(invoice => (
                        <tr key={"list-" + invoice.reservation._id}>
                        <td>{invoice.reservation.usernotlogged}</td>
                        <td>{invoice.machineUseInInvoice}</td>
                        <td>{displayDate(invoice.reservation.startdate)}</td>
                        <td>{displayHour(invoice.reservation.startdate)} à {displayHour(invoice.reservation.enddate)}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <h2 className="text-center">Résérvations</h2>
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '22.5%'}} scope="col">Nom</th>
                        <th style={{width: '22.5%'}} scope="col">Machine</th>
                        <th style={{width: '22.5%'}} scope="col">Date</th>
                        <th style={{width: '22.5%'}} scope="col">Horaires</th>
                        <th style={{width: '10%'}} scope="col">Transformer en facture</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reservations.map(reservation => (
                        <tr key={"list-" + reservation._id}>
                        <td>{reservation.usernotlogged}</td>
                        <td>{reservation.machine.name}</td>
                        <td>{displayDate(reservation.startdate)}</td>
                        <td>{displayHour(reservation.startdate)} à {displayHour(reservation.enddate)}</td>
                        <td>
                        <FormField type="button" callback={() => transformToInvoice(reservation._id, reservation.machine._id)}>
                            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                        </FormField>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
}