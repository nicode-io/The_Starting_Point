import React from 'react';
import { FormField } from '../../commons';
import { MachinePicker } from '../index';
import "./reservationForm.css";
import api from '../../../api/index';
// IMPORT FOR CALENDAR
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export function ReservationForm(props) {
    const [date, setDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());
    const [isLogged , setItsLogged] = useState();
    const [name, setName] = useState('');
    const [mail , setMail] = useState('');
    const [machine, setMachine] = useState();
    const [comment, setComment] = useState();
    
    // On crée une nouvelle reservation en utilisant le Model Reservation et on lui passe l id de la machine pour la relation
    const handleReservation = () => {
        
        try{
            api.insertNew('/add-reservation', {
                machine: machine,
                usernotlogged: name,
                userlogged : 'FALSE',
                startdate : startHour,
                enddate : endHour,
                comment: comment,
            }).then((response) => {
                
                console.log(response);
            },(error) => {
                console.error(error);
                
            })
            // saveReservationInInvoices();
        }catch(error){
            console.log(error);
        }
    }
   
    // On gere le menu déroulant pour a chaque fois assigné l'id de la machine
    let handleChange = (event) => {
        setMachine(event.target.value);
    }
    
    // Return visuel du reservationForm
    return (
        <main id="main">
            <section id="form">
                <form onSubmit={handleReservation}>
                    <MachinePicker  onChange={handleChange}/>
                    <p id={"steps"}>2 - VOS COORDONNEES </p>
                    <article id="name-email">
                        <FormField type="text" name="Nom" placeholder="Nom" callback={fieldValue => setName(fieldValue)} />
                        <FormField type="email" name="Email" placeholder="E-mail" callback={fieldValue => setMail(fieldValue)}/>
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
                        {console.log(date)}
                    </article>
                    <article id={"need-help"}>
                        {/*<p>Besoin de conseils ?</p>*/}
                        {/*<article id={"need-help-choice"}>*/}
                        {/*    <p id={"choice-yes"}><FormField label="OUI&nbsp;&nbsp;" type="radio" name="Test" /></p>*/}
                        {/*    <p><FormField label="NON&nbsp;&nbsp;" type="radio" name="Test" /></p>*/}
                        {/*</article>*/}
                        <p>Informations complémentaires</p>
                        <FormField type="textarea" placeholder="Si vous avez des demandes particulières" callback={fieldValue => setComment(fieldValue)}/>
                    </article>
                    <article className={"reservation-submit"}>
                        <FormField label="Je réserve" type="submit" id="form-submit"/>
                    </article>
                </form>
            </section>
        </main>
    )
}