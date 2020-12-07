import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPenSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons';




export function Invoices() {
    // Var & Hooks
    const [error,setError] = useState();
    const [invoices,setInvoices] = useState([]);
    
    
    //Method for Get all Invoices.

    async function fetchAllData() {
        await api.getAll(`/invoices`)
        .then((data) => {
           setInvoices(data.data);
           console.log(invoices);
                
        },
        (error) => {
            setError(error);
        }
        )};

    useEffect( () => {
        fetchAllData();
    }, []);

    return (
        <Fragment>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <h2 className="text-center">Factures</h2>
                <Link to={`/admin/add-invoice`}>
                    <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                </Link>
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '25%'}} scope="col">Nom</th>
                        <th style={{width: '25%'}} scope="col">Tarif</th>
                        <th style={{width: '25%'}} scope="col">Modifier</th>
                        <th style={{width: '25%'}} scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {invoices.map(invoice => (
                        <tr key={"list-" + invoice._id}>
                        <td>{invoice.name}</td>
                        <td>{invoice.tarif}€/h</td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        </tr>
                        ))};
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
}