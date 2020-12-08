import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import api from '../../../api';
import { FormField, Modal } from "../../commons";
import './agenda.css';



export function Agenda(props) {

    const RESERVATIONS = [{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        _id: 42,
        machine: {name: "Imprimante 3D"},
    },{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17),
        _id: 43,
        machine: {name: "Decoupeuse"},
    },{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15, 30),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16, 30),
        _id: 44,
        machine: {name: "Petit matériel"},
    },];

    // Monday -> Friday // 9h30 -> 17h30 // 5 * 16 time periods of 30min
    const WEEK = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const WORKINGDAYS = [1, 2, 3, 4, 5]; // working days of the week matching Date.getDay() ex: [1, 2, 4, 5] for Monday, Thuesday, Thursday, Friday
    const WORKINGHOURS = [570, 1050]; // [starting hour, ending hour] in minutes, 570 = 9h30, 1050 = 17h30
    const PERIOD = 30; // time frame for the agenda, in minutes

    const selectedDayInit = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }

    const [selectedDay, setSelectedDay] = useState(selectedDayInit());
    const [agenda, setAgenda] = useState([]);

    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const dateToString = (date) => {
        let string = date.getHours() + "h" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
        return string;
    }

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
                let startDate = new Date(date.getTime() + (i * 60000));
                let endDate = new Date(startDate.getTime() + (period * 60000));
                let name = WEEK[date.getDay()] + " " + dateToString(startDate) + " - " + dateToString(endDate);
                let periodReservations = [];
                reservations.map((reservation) => {
                    (startDate.getTime() >= reservation.startdate && startDate.getTime() < reservation.enddate) 
                        && periodReservations.push(reservation);
                })
                day.push({startDate: startDate, endDate: endDate, name: name, reservations: periodReservations})
            }
            agenda.push(day);
        })
        console.log(agenda);
        setAgenda(agenda);
    }

    /**
     * 
     * 
     * @param {Array} workinghours an array of {Number} containing the working hours range in minutes [starting hour, ending hour]
     * @param {Number} period the time period between each timestamp
     * 
     * @return {Array} 
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

    const displayPeriod = (period) => {
        setModalData({
            title: period.name,
            content: createModalContent(period),
        });
        setisModalVisible(true);
    }

    const createModalContent = (period) => {
        console.log(period)
        return (
            (period.reservations.length > 0)
            ? period.reservations.map((reservation) => {
                    return (
                        <div className="ag-reservationContainer">
                            <div className={(period.startDate.getTime() === reservation.startdate.getTime()) ? "ag-reservationBorder" : "ag-reservationBorder ag-reservationFull"}>
                                <p>{dateToString(reservation.startdate)}</p>
                            </div>
                            <div className="ag-reservation">
                                <p>ID: {reservation._id}</p>
                                <p>Machine: {reservation.machine.name}</p>
                                {/* <p>Début: {dateToString(reservation.startdate)} - Fin: {dateToString(reservation.enddate)}</p> */}
                            </div>
                            <div className={(period.endDate.getTime() === reservation.enddate.getTime()) ? "ag-reservationBorder" : "ag-reservationBorder ag-reservationFull"}>
                                <p>{dateToString(reservation.enddate)}</p>
                            </div>
                        </div>
                    )
                })
            : <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        )
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
                                <div className="ag-day" key={WEEK[day[0].startDate.getDay()]}>
                                    <div className="ag-period ag-period-title">
                                        <p>{WEEK[day[0].startDate.getDay()].substring(0,3)}</p>
                                        <p>{day[0].startDate.getDate() + "/" + (day[0].startDate.getMonth() + 1)}</p>
                                    </div>
                                    {day.map((period) => {
                                        return (
                                            <div className={(period.reservations.length > 0) ? "ag-period ag-period-full" : "ag-period ag-period-empty"} 
                                            key={period.name}
                                            onClick={() => displayPeriod(period)}>
                                                {period.reservations.length}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                }
                <Modal isVisible={isModalVisible} setIsVisible={setisModalVisible} data={modalData} />
            </section>
    )
}