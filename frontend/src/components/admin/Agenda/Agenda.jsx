import React, { useState, useEffect, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import api from '../../../api';
import { FormField } from "../../commons";
import './agenda.css';



export function Agenda(props) {

    const RESERVATIONS = [{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        _id: 42,
    },{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17),
        _id: 43,
    },{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15, 30),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16, 30),
        _id: 44,
    },]

    // Monday -> Friday // 9h30 -> 17h30 // 5 * 16 time periods of 30min
    const WEEK = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const WORKINGDAYS = [1, 2, 3, 4, 5];
    const STARTINGTIME = 570; // = 9h30 in minutes
    const ENDINGTIME = 1050; // = 17h30 in minutes

    const [selectedDay, setSelectedDay] = useState();
    const [selectedWeek, setSelectedWeek] = useState();
    const [agenda, setAgenda] = useState([]);


    /**
     * Creates an array containing every working day of a week in {Date} format
     * based on a given day and an array of the usual working days.
     * 
     * @param {Date} date any day of the desired week
     * @param {Array} workingDays an array containing the working days of the week matching Date.getDay() ex: [1, 2, 4, 5] for Monday, Thuesday, Thursday, Friday
     * 
     * @return {Array} an array of {Date}
     */
    const mapWeek = (date, workingDays) => {
        let week = [];
        workingDays.map((dayIndex) => {
            let day = new Date(date);
            day.setHours(-24 * ((day.getDay() === 0) ? 7 - dayIndex : day.getDay() - dayIndex));
            week.push(day);
        })
        return week;
    }

    /**
     * Creates an agenda from a given week to display all the reservations of that week
     * 
     * @param {Array} week an array of {Date}
     * @param {*} dayStart starting hour of the day
     * @param {*} dayEnd ending hour of the day
     * @param {*} period time period of the agenda
     * @param {Array} reservations an array of reservations
     */
    const createAgenda = (week, dayStart, dayEnd, period, reservations) => {
        let agenda = [];
        week.map((date) => {
            let day = [];
            for (let i = dayStart; i < dayEnd; i = i + period) {
                let periodDate = new Date(date);
                periodDate.setHours(Math.floor(i / 60));
                periodDate.setMinutes((i / 30 % 2) * 30);
                let periodReservations = [];
                reservations.map((reservation) => {
                    (periodDate.getTime() >= reservation.startdate && periodDate.getTime() < reservation.enddate) 
                        && periodReservations.push(reservation._id);
                })
                day.push({name: periodDate, reservations: periodReservations})
            }
            agenda.push(day);
        })
        console.log(agenda);
        setAgenda(agenda);
    }

    const handleDate = (date) => {
        setSelectedDay(date);
        setSelectedWeek(mapWeek(date, WORKINGDAYS));
        (selectedDay !== undefined) && createAgenda(mapWeek(date, WORKINGDAYS), STARTINGTIME, ENDINGTIME, 30, RESERVATIONS);
    }

    // const displayAgenda = () => {
    //     for (let i = 0; i < ((lastDay.getTime() - firstDay.getTime()) % (1000*60*60*24)); i++) {
    //         return (
    //             <div style={{width: '100px', height: '100px', backgroundColor: 'red'}}></div>
    //         )
    //         // console.log(i);
    //     }
    // }

    // async function getItemById(type ,id){
    //     try {
    //         await api.getById(`/${type}`, id)
    //         .then((data) => {
    //             setItem(data.data);     
    //             setIsLoaded(true);
    //             setisUpdated(false);         
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // USE EFFECT FOR CHECK IF IS LOADED OR NOT
    
    // useEffect(() => {
    //     (!isLoaded) && getItemById(type,id);
    //     console.log(item);
    //     console.log(isUpdated);
    // })

    useEffect(() => {
        (selectedDay === undefined) && handleDate(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
        // (day !== undefined) && displayAgenda();
    })
    
    return (
            <section className="text-center">
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDay}
                    filterDate={(date) => (date.getDay() !== 0 && date.getDay() !== 6)}
                    onChange={date => handleDate(date)}
                />
                {(agenda !== undefined) &&
                    <div className="agenda">
                        {agenda.map((day, index) => {
                            return (
                                <div className="ag-day">
                                    <p>{WEEK[day[0].name.getDay()]}</p>
                                    <p>{day[0].name.getDate() + "/" + day[0].name.getMonth() + "/" + day[0].name.getFullYear()}</p>
                                    {day.map((period) => {
                                        if (period.reservations.length > 0) {
                                            return (
                                                <div className="ag-period ag-period-full">{period.reservations.length}</div>
                                            )
                                        } else {
                                            return (
                                                <div className="ag-period ag-period-empty">{period.reservations.length}</div>
                                            )
                                        }
                                        // (period.reservations.length > 0)
                                        //     ? <div className="ag-period ag-period-full">
                                        //         {period.reservations.length}
                                        //     </div>
                                        //     : <div className="ag-period ag-period-empty">
                                        //         {period.reservations.length}
                                        //     </div>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                }
            </section>
    )
}