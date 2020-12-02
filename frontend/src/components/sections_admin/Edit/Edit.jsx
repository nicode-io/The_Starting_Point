import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import {  useLocation, useHistory } from 'react-router-dom';
import { FormField } from "../..";



export function Edit(props){
    // SET VAR 
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem ] = useState('');
    let params = useLocation().pathname;
    let splitParams = params.split('/');
    let history = useHistory();
    let type = splitParams[3];
    let id = splitParams[4];
    // METHOD GET MACHINE 
    
    async function getItemById(type ,id){
        try {
            await api.getById(`/${type}`, id)
            .then((data) => {
                setItem(data.data);     
                setIsLoaded(true);           
            });
        } catch (error) {
            console.log(error);
        }
    }
   
    // METHOD FOR UPDATE ITEM 
    
    async function updateItemFromId(type,id){
        try{
            await api.updateById(`/${type}`, id,)
            .then(()=>{
                history.push('/management');
            })
        }catch(error){
            console.log(error);
        }
    }
    
    // USE EFFECT FOR CHECK IF IS LOADED OR NOT
    
    useEffect(() => {
        (!isLoaded) && getItemById(type,id);
        
    })

    // TEST AVEC METHOD EN DEHORS
    let itemToDisplay = Object.entries(item).map((key,value)  => {
        return (
            <Fragment>
            {(key[0][0] !== "_") && <FormField label={key[0]} value={key[1]} /> }
            </Fragment>
        
    )});

    console.log();
    if(item === null){
        return (
            <h1>ELEMENT PAS TROUVER</h1>
        )
    }else {
        return (
            
                <section className="text-center">
                    <h1>EDIT SECTION</h1>
                        <form onSubmit={updateItemFromId} method="POST"> 
                        {itemToDisplay}
                        <FormField type="submit" label="Mettre a jour" />
                        </form>
                </section>
            
        )
    } 
    }


   