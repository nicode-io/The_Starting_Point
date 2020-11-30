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
        <main id="main">
            <section id="form">
                <form>
                    <MachinePicker />
                    <p id={"steps"}>2 - VOS COORDONNEES </p>
                    <article id="name-email">
                        <p><input type="text" placeholder="Nom"/></p>
                        <p><input type="email" placeholder="Email"/></p>
                    </article>
                    <p id={"steps"}>3 - DATE, HEURE ET INFOS </p>
                    <article id="date-picker">
                        <p>Le&nbsp;<DatePicker
                            dateFormat="dd/MM/yyyy" 
                            selected={date} 
                            onChange={date => setDate(date)} 
                            id="datepicker-element"
                        /></p>
                        <p>De&nbsp;<DatePicker
                            selected={startHour}
                            onChange={startHour => setStartHour(startHour)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                        /></p>
                        <p>A&nbsp;&nbsp;<DatePicker
                            selected={endHour}
                            onChange={endHour => setEndHour(endHour)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                        /></p>
                    </article>
                    <article id={"need-help"}>
                        {/*<p>Besoin de conseils ?</p>*/}
                        {/*<article id={"need-help-choice"}>*/}
                        {/*    <p id={"choice-yes"}><FormField label="OUI&nbsp;&nbsp;" type="radio" name="Test" /></p>*/}
                        {/*    <p><FormField label="NON&nbsp;&nbsp;" type="radio" name="Test" /></p>*/}
                        {/*</article>*/}
                        <p>Informations complémentaires</p>
                        <p><FormField type="textarea" placeholder="Describe yourself here..."/></p>
                    </article>
                    <article className={"reservation-submit"}>
                        <p><input label="Réserver" type="submit" id="form-submit" value={"Je réserve"}/></p>
                    </article>
                </form>
            </section>
        </main>
    )
}