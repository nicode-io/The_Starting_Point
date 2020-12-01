import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import { useParams , BrowserRouter , Route} from "react-router";
import {  useLocation } from 'react-router-dom';



export function Edit(props){
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [machine, setMachine] = useState([]);
    let params = useLocation().pathname;

    async function getMachineForEdit(){
        
        await api.getById('/machine/:machineId', )
        .then((data) =>{
            console.log("ON RENTRE DANS LE GETMACHINEFOR EDIT");
            setIsLoaded = true;
            setMachine(data.data);            
        },
        (error) => {
            
            setError(error);
            console.log(error);
        })
        }
        // getMachineForEdit(id); 
         console.log(params);
           
    return (
        <section>
            <h1>EDIT SECTION</h1>
           
        </section>
    )
}

