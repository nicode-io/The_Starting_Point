import React from 'react';
import api from '../../../api/index';
import DatePicker from "react-datepicker";
import { FormField } from '../../commons';
import { MachinePicker } from '../index';
import { useState } from "react";
import "./reservationForm.css";
import "react-datepicker/dist/react-datepicker.css";


/**
 * This component manage the reservation form,
 * one of the most important part of the project.
 * It allows a user to choose a Machine, a time slot
 * and then validate his reservation.
 * @param props
 * @returns {JSX.Element}
 */
export function ReservationForm(props) {

    // Variables
    const [date, setDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());
        // const [isLogged , setItsLogged] = useState(); TBD
    const [name, setName] = useState('');
    const [mail , setMail] = useState('');
    const [machine, setMachine] = useState();
    const [comment, setComment] = useState();
    
    // Create a new reservation according to Reservation model and Machine ID
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
                // saveReservationInInvoices(); TBD
        }catch(error){
            console.log(error);
        }
    }
   
    // Manage user Machine's choice
    let handleChange = (event) => {
        setMachine(event.target.value);
    }
    
    // Display Reservation form
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
                    
                    <section id="date-picker">
                        <article>
                            Le&nbsp;
                            <DatePicker
                            dateFormat="dd/MM/yyyy" 
                            selected={date} 
                            onChange={date => setDate(date)} 
                            id="datepicker-element"
                            />
                        </article>
                        <article>
                            De&nbsp;
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
                        </article>
                        <article>
                            A&nbsp;&nbsp;
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
                        </article>
                    </section>
                    <article id={"need-help"}>
                        <p>Informations complémentaires</p>
                        <FormField type="textarea" placeholder="Demandes spécifiques / Commentaires" callback={fieldValue => setComment(fieldValue)}/>
                    </article>
                    <article className={"reservation-submit"}>
                        <FormField label="Je réserve" type="submit" id="form-submit"/>
                    </article>
                </form>
            </section>
        </main>
    )
}