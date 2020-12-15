import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Modal } from "../../commons";
import './agenda.css';


/**
 * This component manage agenda display
 * for the admin reservation view.
 * It allows admin user to see which machine is
 * used on a specific day / hour / time slot
 * @returns {JSX.Element}
 */
export function Agenda(props) {

    // Solid reservations before using database data
    const RESERVATIONS = [{
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        _id: 42,
        machine: { name: "Imprimante 3D" },
    }, {
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 17),
        _id: 43,
        machine: { name: "Decoupeuse" },
    }, {
        startdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 15, 30),
        enddate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16, 30),
        _id: 44,
        machine: { name: "Petit matériel" },
    },];

    // Define time slots for reservations
    // Monday -> Friday // 9h30 -> 17h30 // 5 * 16 time periods of 30min
    const WEEK = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const WORKINGDAYS = [1, 2, 3, 4, 5]; // working days of the week matching Date.getDay() ex: [1, 2, 4, 5] for Monday, Thuesday, Thursday, Friday
    const WORKINGHOURS = [570, 1050]; // [starting hour, ending hour] in minutes, 570 = 9h30, 1050 = 17h30
    const TIMEPERIOD = 30; // time frame for the agenda, in minutes

    const selectedDayInit = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }

    const [selectedDay, setSelectedDay] = useState(selectedDayInit());
    const [agenda, setAgenda] = useState([]);
    const [modalPeriod, setModalPeriod] = useState();
    const [isModalVisible, setisModalVisible] = useState(false);

    /**
     * Turns a {Date} into a {String} with 2 digits for minutes
     * 
     * @param {Date} date 
     * @return {String}
     */
    const dateToString = (date) => {
        return date.getHours() + "h" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    }

    /**
     * Generates an array containing every working day of a week in {Date} format
     * based on a given day and an array of the usual working days.
     * 
     * @param {Date} date any day of the desired week
     * @param {Array} workingDays an array containing the working days of the week matching Date.getDay()
     * @return {Array} an array of {Date} containing every working day of a given week
     */
    const generateWeek = (date, workingDays) => {
        let week = [];
        workingDays.map((dayIndex) => {
            let day = new Date(date);
            day.setHours(-24 * ((day.getDay() === 0) ? 7 - dayIndex : day.getDay() - dayIndex));
            week.push(day);
        })
        return week;
    }

    /**
     * Generates an array of timestamps in {String}
     * based on a range of hours and a time period between each timestamp.
     * 
     * @param {Array} workinghours an array of 2 {Number} containing the working hours range in minutes [starting hour, ending hour]
     * @param {Number} period the time period between each timestamp
     * @return {Array} an array of {String}
     */
    const generateTimestamps = (workinghours, period) => {
        let timestamps = [];
        for (let i = workinghours[0]; i < workinghours[1]; i = i + period) {
            let minutes = ((i / period % 2) * period) === 0 ? "00" : (i / period % 2) * period;
            let timestamp = Math.floor(i / 60) + "h" + minutes;
            timestamps.push(timestamp);
        }
        return timestamps;
    }

    /**
     * Creates an agenda from a given week to display all the reservations of said week
     * 
     * @param {Array} week an array of {Date} containing every day to display
     * @param {Array} workinghours an array of 2 {Number} containing the working hours range in minutes [starting hour, ending hour]
     * @param {Number} period the time period used in the agenda, in minutes
     * @param {Array} reservations an array of reservations
     * 
     * @return {Array} agenda 
     *      Agenda is an {Array} of days {Array}
     *      Every day is an {Array} of period of time {Object}
     *      Example for 2 days with 3 periods:
     *      agenda = [
     *       [{day1Period1}, {day1Period2}, {day1Period3}],
     *       [{day2Period1}, {day2Period2}, {day2Period3}],
     *      ]
     *      Each period is an object with 4 properties:
     *      period = {
     *       startDate: {Date},
     *       endDate: {Date},
     *       name: {String},
     *       reservations: {Array},
     *      }
     */
    const createAgenda = (week, workinghours, period, reservations) => {
        let agenda = [];
        week.map((date) => {
            let day = [];
            for (let i = workinghours[0]; i < workinghours[1]; i = i + period) {
                let periodStartDate = new Date(date.getTime() + (i * 60000));
                let periodEndDate = new Date(periodStartDate.getTime() + (period * 60000));
                let periodName = WEEK[date.getDay()] + " " + dateToString(periodStartDate) + " - " + dateToString(periodEndDate);
                let periodReservations = [];
                reservations.map((reservation) => {
                    (periodStartDate.getTime() >= reservation.startdate && periodStartDate.getTime() < reservation.enddate)
                        && periodReservations.push(reservation);
                })
                day.push({ startDate: periodStartDate, endDate: periodEndDate, name: periodName, reservations: periodReservations })
            }
            agenda.push(day);
        })
        setAgenda(agenda);
    }

    const DatePickerCustomInput = ({ value, onClick }) => {
        return (
            <div id="date-choice"><input style={{ marginLeft: 0, fontSize: '0.8rem' }} className="ag-period" onClick={onClick} value={value} /></div>
        )
    }

    /**
     * Displays a period of time in the modal.
     * @param {Object} period the period of time to display
     */
    const displayPeriod = (period) => {
        setModalPeriod(period);
        setisModalVisible(true);
    }

    /**
     * Displays the previous period of time in the agenda.
     */
    const previousPeriod = () => {
        agenda.map((day, index) => {
            (day.indexOf(modalPeriod) > 0)
                ? displayPeriod(day[day.indexOf(modalPeriod) - 1])
                : ((day.indexOf(modalPeriod) === 0) & (index > 0))
                && displayPeriod(agenda[index - 1][agenda[index - 1].length - 1]);
        })
    }

    /**
     * Displays the next period of time in the agenda.
     */
    const nextPeriod = () => {
        agenda.map((day, index) => {
            ((day.indexOf(modalPeriod) >= 0) && (day.indexOf(modalPeriod) < day.length - 1))
                ? displayPeriod(day[day.indexOf(modalPeriod) + 1])
                : ((day.indexOf(modalPeriod) === day.length - 1) & (index < agenda.length - 1))
                && displayPeriod(agenda[index + 1][0]);
        })
    }

    /**
     * Creates a React Fragment displaying the reservations of a given period of time.
     * Used as a props by <Modal />
     * 
     * @param {Object} period the period of time containing the reservations
     * @return React Fragment
     */
    const createModalContent = (period) => {
        return (
            <>
                <section className={"main-list"}>
                    <article className={"agenda-item"}>
                        {(period.reservations.length > 0)
                            ? period.reservations.map((reservation) => {
                                return (
                                    <section className="ag-reservationContainer">
                                        <article className={(period.startDate.getTime() === reservation.startdate.getTime()) ? "ag-reservationBorder" : "ag-reservationBorder ag-reservationEnd"}>
                                            <p>{dateToString(reservation.startdate)}</p>
                                        </article>
                                        <article className="ag-reservation">
                                            <p>ID: {reservation._id}</p>
                                            <p>Machine: {reservation.machine.name}</p>
                                        </article>
                                        <article className={(period.endDate.getTime() === reservation.enddate.getTime()) ? "ag-reservationBorder" : "ag-reservationBorder ag-reservationEnd"}>
                                            <p>{dateToString(reservation.enddate)}</p>
                                        </article>
                                    </section>
                                )
                            })
                            : <p>Pas de réservation en cours.</p>
                        }
                    </article>
                </section>
            </>
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
        (selectedDay !== undefined) && createAgenda(generateWeek(selectedDay, WORKINGDAYS), WORKINGHOURS, TIMEPERIOD, RESERVATIONS);
    }, [selectedDay])

    return (
        <section className="section-agenda text-center">
            {(agenda !== undefined) &&
                <section className="agenda">
                    <article className="ag-day">
                        <DatePicker
                            dateFormat="dd/MM"
                            selected={selectedDay}
                            filterDate={(date) => (date.getDay() !== 0 && date.getDay() !== 6)}
                            customInput={<DatePickerCustomInput />}
                            onChange={date => setSelectedDay(date)}
                        />
                        {generateTimestamps(WORKINGHOURS, TIMEPERIOD).map((timestamp) => {
                            return (
                                <div className="ag-period ag-period-title">
                                    <p>{timestamp}</p>
                                </div>
                            )
                        })}
                    </article>
                    {agenda.map((day) => {
                        return (
                            <section className="ag-day" key={WEEK[day[0].startDate.getDay()]}>
                                <article className="ag-period ag-period-title">
                                    <p>{WEEK[day[0].startDate.getDay()].substring(0, 3)}</p>
                                    <p>{day[0].startDate.getDate() + "/" + (day[0].startDate.getMonth() + 1)}</p>
                                </article>
                                {day.map((period) => {
                                    return (
                                        <p className={(period.reservations.length > 0) ? "ag-period ag-period-full" : "ag-period ag-period-empty"}
                                            key={period.name}
                                            onClick={() => displayPeriod(period)}>
                                            {period.reservations.length}
                                        </p>
                                    )
                                })}
                            </section>
                        )
                    })}
                </section>
            }
            {(modalPeriod !== undefined) && <Modal isVisible={isModalVisible} setIsVisible={setisModalVisible} title={modalPeriod.name} content={createModalContent(modalPeriod)} previous={previousPeriod} next={nextPeriod} />}
        </section>
    )
}