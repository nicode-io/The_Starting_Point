import React from 'react';
import { MachinePicker } from '../..';
import { FormField } from '../..';
// IMPORT FOR CALENDAR
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function ReservationForm() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <form>
                This is a reservation form<br />
                <MachinePicker />
                
                <FormField label="Nom" type="text" />
                <FormField label="Email" type="email" />
                <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={date => setStartDate(date)} />
                <p>Avez-vous besoin d'accompagnement ?</p>
                <div>
                    <FormField label="oui" type="radio" name="Test" />
                    <FormField label="non" type="radio" name="Test" />
                </div>
                <FormField label="Message" type="textarea" />
                <FormField label="Réserver" type="submit" />
            </form>
        </section>
    )
}