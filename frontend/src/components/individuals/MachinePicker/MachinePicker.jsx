import React, { useState, useEffect } from 'react';
import api from '../../../api';
import "./machinePicker.css";

export function MachinePicker() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [machines, setMachines] = useState([]);

    useEffect( () => {
        async function fetchData() {
        setIsLoaded(true);
        await api.getAll('/machines')
        .then((data) => {
            setIsLoaded(true);
            setMachines(data.data);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )}
        fetchData();
    
    }, []);

    return (
        <section class={"machine-picker"}>
            <label for="machinePicker">1 - CHOIX MACHINE </label>
            <select name="machinePicker">
                <option value="" selected>Choisir une machine</option>
                {machines.map(machine => (
                    <option value={machine._id}>
                        {machine.name} {machine.category} {machine.tarif}€/h.
                    </option>
                ))}
            </select>
        </section>
    );
}


