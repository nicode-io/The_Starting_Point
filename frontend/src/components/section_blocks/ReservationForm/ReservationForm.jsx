import React from 'react';
import { MachinePicker } from '../..';
import { FormField } from '../..';
import "./reservationForm.css";
// IMPORT FOR CALENDAR
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export function ReservationForm() {
    const [date, setDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());

    return (
        <section id="main">
            <article id="form">
                <form>
                    <MachinePicker />
                    <div id="name-email">
                        <FormField id="nom" type="text" placeholder="Nom"/>
                        <FormField  id="email" type="email" placeholder="Email" />
                    </div>
                    <div id="date-picker">
                        <DatePicker 
                            dateFormat="dd/MM/yyyy" 
                            selected={date} 
                            onChange={date => setDate(date)} 
                            id="datepicker-element"
                        />
                        <DatePicker
                            selected={startHour}
                            onChange={startHour => setStartHour(startHour)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                        />
                        <DatePicker
                            selected={endHour}
                            onChange={endHour => setEndHour(endHour)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                        />
                    </div>
                    <p>Avez-vous besoin d'accompagnement ?</p>

                    <FormField label="oui" type="radio" name="Test" />
                    <FormField label="non" type="radio" name="Test" />

                    <div id="message">
                        <FormField label="Message" type="textarea" placeholder="message"/>
                    </div>
                    <FormField label="Réserver" type="submit" id="form-submit" class="btn btn-primary"/>
                </form>
            </article>
        </section>
    )
}