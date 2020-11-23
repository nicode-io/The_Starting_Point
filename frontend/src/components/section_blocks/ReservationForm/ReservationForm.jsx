import React from 'react';
import { MachinePicker } from '../..';
import { FormField } from '../..';
// IMPORT FOR CALENDAR
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function ReservationForm() {
    const [date, setDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());

    return (
        <section>
            <form>
                This is a reservation form<br />
                <MachinePicker />
                
                <FormField label="Nom" type="text" />
                <FormField label="Email" type="email" />
                <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={date => setDate(date)} />
                <DatePicker
                    selected={startHour}
                    onChange={startHour => setStartHour(startHour)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <DatePicker
                    selected={endHour}
                    onChange={endHour => setEndHour(endHour)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
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