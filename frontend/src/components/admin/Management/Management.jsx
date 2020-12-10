import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPenSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FormField } from '../../commons';


/**
 *  This component allow admin user to
 *  edit Machines and Products
 * @returns {JSX.Element}
 */
export function Management(props) {

    // Variables
    const [machines, setMachines] = useState([]);
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    // Get data from database
    async function fetchAllData(type) {
        await api.getAll(`/${type}s`)
        .then((data) => {
            if (type === "machine") {
                setMachines(data.data);
            } else if (type === "product") {
                setProducts(data.data);
            }
        },
        (error) => {
            setError(error);
        }
    )}

    // Delete an item according to its type, ID and name
    async function deleteItemById(type, id, name){
        try {
            let txt;
            txt = window.confirm(`Voulez vous supprimer un(e) ${type}`);
            if(txt){
                await api.deleteById(`/delete-${type}`, id)
                .then((res) => {
                    if (res.status === 200) {
                        setMessage(`${name} supprimé(e)`);
                        fetchAllData(`${type}`);
                    } else {
                        setMessage(`Un problème est survenu`);
                    }
                })
            }else{
                console.log('Error - Delete has not worked');
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllData("machine");
        fetchAllData("product");
    }, []);

    // Render the edition tools
    return (
        <Fragment>
             <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
               {message}
                <div className="d-flex justify-content-around align-items-center w-50">
                    <h2>Machines</h2>
                    <Link to={`/admin/add-machine`}>
                        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                    </Link>
                </div>

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
                    {machines.map(machine => (
                        <tr key={"list-" + machine._id}>
                        <td>{machine.name}</td>
                        <td>{machine.tarif}€/h</td>
                        <td>
                            <Link to={`edit/machine/${machine._id}`}>
                                <FontAwesomeIcon icon={faPenSquare} size="2x" />
                            </Link>
                        </td>
                        <td>
                            <FormField type="button" callback={() => deleteItemById('machine', machine._id, machine.name)}>
                                <FontAwesomeIcon icon={faMinusSquare} size="2x" />
                            </FormField>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <article className="d-flex justify-content-around align-items-center w-50">
                        <h2>Produits</h2>
                        <Link to={`/admin/add-product`}>
                            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                        </Link>
                </article>
                <article>
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
                        {products.map(product => (
                            <tr key={"list-" + product._id}>
                            <td>{product.name}</td>
                            <td>{product.tarif}€/h</td>
                            <td>
                                <Link to={`edit/product/${product._id}`}>
                                    <FontAwesomeIcon icon={faPenSquare} size="2x" />
                                </Link>
                            </td>
                            <td>
                                <FormField type="button" callback={() => deleteItemById('product', product._id)}>
                                    <FontAwesomeIcon icon={faMinusSquare} size="2x" />
                                </FormField>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </section>
        </Fragment>
    );
}