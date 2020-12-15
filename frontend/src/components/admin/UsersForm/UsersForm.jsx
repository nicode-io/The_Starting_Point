import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPenSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FormField } from '../../commons';


export function UsersForm() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('text');


    useEffect( () => {
           fetchData();
    
    }, []);
        async function fetchData() {
        setIsLoaded(true);
        await api.getAll('/users')
        .then((data) => {
            setIsLoaded(true);
            setUsers(data.data);
            
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )}
 
    async function deleteItemById(type, id, name){
        try {
            let txt;
            if (window.confirm(`Voulez vous supprimer un(e) ${type}`)) {
                txt = true;
            } else {
                txt = false;
            }
            if(txt){
                await api.deleteById(`/delete-${type}`, id)
                .then((res) => {
                    if (res.status === 200) {
                        setMessage(`${name} supprimé(e)`);
                        fetchData(`${type}`);
                    } else {
                        setMessage(`Probleme`);
                    }
                })
            }else{
                console.log('delete not CONFIRM !!!');
            }
        } catch(error) {
            console.log(error);
        }
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <section>
                {message}
                <table className="table w-50 text-center">
                    <thead className="thead-dark">
                        <tr>
                        <th style={{width: '25%'}} scope="col">Nom</th>
                        <th style={{width: '25%'}} scope="col">Prénom</th>
                        <th style={{width: '25%'}} scope="col">Email</th>
                        <th style={{width: '25%'}} scope="col">Tel</th>
                        <th style={{width: '25%'}} scope="col">Company</th>
                        <th style={{width: '25%'}} scope="col">Type</th>
                        <th style={{width: '25%'}} scope="col">Modifier</th>
                        <th style={{width: '25%'}} scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={"list-" + user._id}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.tel}</td>
                        <td>{user.company}</td>
                        <td>{user.usertype}</td>
                        <td>
                            <Link to={`user-edit/${user._id}`}>
                                <FontAwesomeIcon icon={faPenSquare} size="2x" />
                            </Link>
                        </td>
                        <td>
                            <FormField type="button" callback={() => deleteItemById('user', user._id, user.email)}>
                                <FontAwesomeIcon icon={faMinusSquare} size="2x" />
                            </FormField>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}