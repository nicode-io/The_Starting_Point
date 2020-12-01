import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { useParams , BrowserRouter , Route} from "react-router";
import {  useLocation } from 'react-router-dom';



export function Edit(props){
    const [isLoaded, setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);
    const [machine, setMachine] = useState('');
    let params = useLocation().pathname;
    let splitParams = params.split('/');
    let id = splitParams[3];
    
    async function getMachineForEdit(){
        try {
            await api.getById('/machine', id)
            .then((data) => {
                console.log("ON RENTRE DANS LE GETMACHINEFOR EDIT");
                console.log(data.data);
                setMachine(data.data);         
                setIsLoaded(true);           
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (!isLoaded) && getMachineForEdit();
    })
    
    return (
        <section>
            <h1>EDIT SECTION</h1>
            {Object.keys(machine).map((key) => {
                return <p>{key} : {machine[key]} </p>
            })}
        </section>
    )
}

