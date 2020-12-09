import React, { Fragment } from "react";
import { Link, useParams } from 'react-router-dom';
import {EventsCarousel, FilesOverview, ReservationsList, ReservationForm, InvoicesList, RegisterForm, LoginForm} from "./index";
import "./template.css";

/**
 *
 * INDEX
 *
 * 1. Dahsboard content
 * 2. Reservation content
 * 3. Login content
 * 4. Register content
 * 5. Files content
 * 6. Conditions
 * 7. Display content
 *
 */

export const Template = () => {
    let params = useParams();
    let navContent;

    // 1. Dashboard content
    const DASHBOARD =
        <Fragment>
            <ReservationsList />
            <FilesOverview />
            <EventsCarousel />
            <Link to="/admin">Admin</Link>
        </Fragment>;

    // 2. Reservation content
    const RESERVATION =
        <Fragment>
            <ReservationForm />
        </Fragment>

    // 3. Login content
    const LOGIN =
        <Fragment>
            <section className={"login-header"}>
                <h1>Connexion</h1>
            </section>
            <LoginForm />
        </Fragment>

    // 4. Register content
    const REGISTER =
        <Fragment>
            <section className={"register-header"}>
                <h1>Inscription</h1>
            </section>
            <RegisterForm />
        </Fragment>

    // 5. Files content
    const FILES =
        <Fragment>
            <InvoicesList />
            <ReservationsList />
        </Fragment>

    // 6. Conditions
    if (params.view === "reservation") {
        navContent = RESERVATION;
    } else if (params.view === "login") {
        navContent = LOGIN;
    } else if (params.view === "register"){
        navContent = REGISTER;
    } else if (params.view === "files"){
        navContent = FILES;
    } else {
        navContent = DASHBOARD;
    }

    // 7. Display content
    return (
        <main>
            {navContent}
        </main>
    )
}