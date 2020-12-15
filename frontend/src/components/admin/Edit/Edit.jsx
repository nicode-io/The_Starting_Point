import React, { useState, useEffect, Fragment } from 'react';
import api from '../../../api';
import {  useLocation, useHistory } from 'react-router-dom';
import { FormField } from "../../commons";



export function Edit(props){
    // SET VAR 
    // const [formValues, setformValues] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem ] = useState('');
    const [isUpdated, setisUpdated ] = useState(false);
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
                setisUpdated(false);         
            });
        } catch (error) {
            console.log(error);
        }
    }
   
    // METHOD FOR UPDATE ITEM 
    
    async function updateItemFromId(){
        try{
            await api.updateById(`/${type}`, id, item)
            // .then((response) => {
            //     return (response.ok) && response.blob();
            // })
            // .then((blob) => {
            //     console.log(blob);
            // })
            // setisUpdated(true);
            // setIsLoaded(false);
            // history.push('/admin/management');
        } catch(error) {
            console.log(error);
        }
        //  finally {
        //     history.push('/admin/management');
        // }
    }
    
    // USE EFFECT FOR CHECK IF IS LOADED OR NOT
    
    useEffect(() => {
        (!isLoaded) && getItemById(type,id);
        // console.log(item);
        // console.log(isUpdated);
    })

    // TEST AVEC METHOD EN DEHORS
    let itemToDisplay = Object.entries(item).map((key,value)  => {
        return (
            <Fragment>
            {(key[0][0] !== "_") && <FormField label={key[0]} value={key[1]} callback={(fieldValue) => setItem({...item, ...{[key[0]]: fieldValue} })} /> }
            </Fragment>
        
    )});

    if(item === null) {
        return (
            <section className="text-center">
                <h1>ELEMENT PAS TROUVER</h1>
            </section>
        )
    } else if (isUpdated === true) {
        return (
            <section className="text-center">
                <h1>EDIT SECTION</h1>
                <form onSubmit={updateItemFromId}> 
                    {itemToDisplay}
                    <FormField type="submit" label="Mettre a jour" />
                </form>
                <h2>Element mis à jour</h2>
            </section>
        )
    } else {
        return (
            
                <section className="text-center">
                    <h1>EDIT SECTION</h1>
                    <form className="edit-form" onSubmit={updateItemFromId}> 
                        {itemToDisplay}
                        <FormField type="submit" label="Mettre à jour" />
                    </form>
                </section>
            
        )
    } 
    }