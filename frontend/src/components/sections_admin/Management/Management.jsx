import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPenSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons'



export function Management() {
    const [error, setError] = useState(null);
    const [machines, setMachines] = useState([]);
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');


    useEffect( () => {
        async function fetchData() {
        await api.getAll('/machines')
        .then((data) => {
            setMachines(data.data);
        },
        (error) => {
            setError(error);
        }
        )}
        async function fetchProduct(){
            await api.getAll('/products')
            .then((data) => {
                setProducts(data.data);
            },
            (error) => {
                setError(error);
                console.log(error);
            })
        }
        
        fetchData();
        fetchProduct();
    }, []);
        function deleteItemById(type ,id){
            try{
                let txt;
                if (window.confirm(`Voulez vous supprimer un(e) ${type}`)) {
                    txt = true;
                } else {
                    txt = false;
                }
                if(txt){
                    api.deleteById(`/delete-${type}`, id)
                    
                        setMessage(`${type} a été supprimer`)
                    
                    
                    console.log('Item Deleted !!');
                }else{
                    console.log('delete not CONFIRM !!!');
                }
            }catch(error){
                console.log(error);
            }
            
            
            
            
        }
        

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
                    <th scope="col">name</th>
                    <th scope="col">Tarif</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
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
                        <span onClick={() => deleteItemById('machine', machine._id)} >
                            <FontAwesomeIcon icon={faMinusSquare} size="2x" />
                        </span>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
        <section className="d-flex justify-content-center align-items-center flex-column mt-3">
            <div className="d-flex justify-content-around align-items-center w-50">
                    <h2>Produits</h2>
                    <Link to={`/admin/add-product`}>
                        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                    </Link>
            </div>
            <table className="table w-50 align-item-center">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">name</th>
                    <th scope="col">Tarif</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
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
                        <span onClick={() => deleteItemById('product', product._id)} >
                            <FontAwesomeIcon icon={faMinusSquare} size="2x" />
                        </span>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </Fragment>
    );
}