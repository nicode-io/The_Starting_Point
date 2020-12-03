import React, { Fragment } from "react";
import "./template.css";
import { Link, useParams } from 'react-router-dom';
import {EventsCarousel, FilesOverview, ReservationsList, ReservationForm, InvoicesList, RegisterForm, LoginForm} from "./index";

export const Template = () => {
    let params = useParams();
    let tab;

    const DASHBOARD = <Fragment>
        <ReservationsList />
        <FilesOverview />
        <EventsCarousel />
        <Link to="/admin">Admin</Link>
    </Fragment>;

    const RESERVATION = <Fragment>
        <ReservationForm />
    </Fragment>

    const LOGIN = <Fragment>
        <section className={"login-header"}>
            <h1>Connexion</h1>
        </section>
        <LoginForm />
    </Fragment>

    const REGISTER = <Fragment>
        <section className={"register-header"}>
            <h1>Inscription</h1>
        </section>
        <RegisterForm />
    </Fragment>

    const FILES = <Fragment>
            This is a list of all your documents
            <InvoicesList />
            <ReservationsList />
    </Fragment>

    if (params.view === "reservation") {
        tab = RESERVATION;
    } else if (params.view === "login") {
        tab = LOGIN;
    } else if (params.view === "register"){
        tab = REGISTER;
    } else if (params.view === "files"){
        tab = FILES;
    } else {
        tab = DASHBOARD;
    }

    console.log(params.view);

    return (
        <main>
            {tab}
        </main>
    )
}






//             <Route path="/files/invoices/:invoiceId">
//                 <FileDetail file="invoices" />
//             </Route>
//             <Route path="/files/reservations/:reservationId">
//                 <FileDetail file="reservations" />
//             </Route>
//             <Route path="/events">
//                 <Events />
//             </Route> 



// export function Events() {
//     return (
//         <main>
//             See our nice events!
//         </main>
//     )
// }

// export function FileDetail(props) { //props.file = invoice / reservation  + id
//     return (
//         <main>
//             {/* 
//                 Si props.file = invoice
//                 <InvoiceItem id="id" />
//                 Si props.file = reservation
//                 <ReservationItem id="id" />
//             */}
//         </main>
//     )
// }

// export function EventDetail() {
// }
