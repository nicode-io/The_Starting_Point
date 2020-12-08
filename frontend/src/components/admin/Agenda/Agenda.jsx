import React, { useState, useEffect, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import api from '../../../api';
import { FormField, Modal } from "../../commons";
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
    },];

    // Monday -> Friday // 9h30 -> 17h30 // 5 * 16 time periods of 30min
    const WEEK = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const WORKINGDAYS = [1, 2, 3, 4, 5]; // working days of the week matching Date.getDay() ex: [1, 2, 4, 5] for Monday, Thuesday, Thursday, Friday
    const WORKINGHOURS = [570, 1050]; // [starting hour, ending hour] 570 = 9h30, 1050 = 17h30, in minutes
    const PERIOD = 30; // time frame for the agenda, in minutes

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [agenda, setAgenda] = useState([]);

    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalReservations, setModalReservations] = useState([]);

    /**
     * Creates an array containing every working day of a week in {Date} format
     * based on a given day and an array of the usual working days.
     * 
     * @param {Date} date any day of the desired week
     * @param {Array} workingDays an array containing the working days of the week matching Date.getDay()
     * 
     * @return {Array} an array of {Date} containing every open day of a given week
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
     * @param {Array} week an array of {Date} containing every day to display
     * @param {Array} workinghours an array of {Number} containing the working hours range in minutes [starting hour, ending hour]
     * @param {Number} period the time period used in the agenda, in minutes
     * @param {Array} reservations an array of reservations
     */
    const createAgenda = (week, workinghours, period, reservations) => {
        let agenda = [];
        week.map((date) => {
            let day = [];
            for (let i = workinghours[0]; i < workinghours[1]; i = i + period) {
                let periodDate = new Date(date);
                periodDate.setHours(Math.floor(i / 60));
                periodDate.setMinutes((i / period % 2) * period);
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
        // return agenda;
    }

    /**
     * 
     * 
     * @param {Array} workinghours an array of {Number} containing the working hours range in minutes [starting hour, ending hour]
     * @param {Number} period the time period between each timestamp
     */
    const getTimestamps = (workinghours, period) => {
        let timestamps = [];
        for (let i = workinghours[0]; i < workinghours[1]; i = i + period) {
            let minutes = ((i / period % 2) * period) === 0 ? "00" : (i / period % 2) * period;
            let timestamp = Math.floor(i / 60) + "h" + minutes;
            timestamps.push(timestamp);
        }
        return timestamps;
    }

    const DatePickerCustomInput = ({value, onClick}) => {
        return (
            <input style={{marginLeft: 0, fontSize: '0.8rem'}} className="ag-period" onClick={onClick} value={value} />
        )
    }

    const displayReservations = (reservations) => {
        setModalReservations(reservations);
        setisModalVisible(true);
        // return (<Modal />);
        // console.log(reservations);
    }

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
        (selectedDay !== undefined) && createAgenda(mapWeek(selectedDay, WORKINGDAYS), WORKINGHOURS, PERIOD, RESERVATIONS);
    }, [selectedDay])
    
    return (
            <section className="section-agenda text-center">
                {/* <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDay}
                    filterDate={(date) => (date.getDay() !== 0 && date.getDay() !== 6)}
                    onChange={date => setSelectedDay(date)}
                /> */}
                {(agenda !== undefined) &&
                    <div className="agenda">
                        <div className="ag-day">
                            {/* <div className="ag-period"> */}
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={selectedDay}
                                    filterDate={(date) => (date.getDay() !== 0 && date.getDay() !== 6)}
                                    customInput={<DatePickerCustomInput />}
                                    onChange={date => setSelectedDay(date)}
                                />
                            {/* </div> */}
                            {getTimestamps(WORKINGHOURS, PERIOD).map((timestamp) => {
                                return (
                                    <div className="ag-period ag-period-title">
                                        <p>{timestamp}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {agenda.map((day) => {
                            return (
                                <div className="ag-day" key={WEEK[day[0].name.getDay()]}>
                                    <div className="ag-period ag-period-title">
                                        <p>{WEEK[day[0].name.getDay()].substring(0,3)}</p>
                                        <p>{day[0].name.getDate() + "/" + (day[0].name.getMonth() + 1)}</p>
                                        {/* + "/" + day[0].name.getFullYear() */}
                                    </div>
                                    {day.map((period) => {
                                            return (
                                                <div className={(period.reservations.length > 0) ? "ag-period ag-period-full" : "ag-period ag-period-empty"} 
                                                key={WEEK[day[0].name.getDay()] + "-" + period.name.getHours() + "h" + period.name.getMinutes()}
                                                onClick={() => displayReservations(period.reservations)}>
                                                    {period.reservations.length}
                                                </div>
                                            )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                }
                <Modal isVisible={isModalVisible} setIsVisible={setisModalVisible} data={modalReservations} />
            </section>
    )
}