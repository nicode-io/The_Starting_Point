import React from "react";
import { useParams } from 'react-router-dom';
import {EventsCarousel, FilesOverview, Home, InvoicesList, LoginForm, RegisterForm, ReservationForm, ReservationsList } from "./index";
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
        <>
            <ReservationsList />
            <Home />
        </>;

    // 2. Reservation content
    const RESERVATION =
        <>
            <ReservationForm />
        </>

    // 3. Login content
    const LOGIN =
        <>
            <section className={"login-header"}>
                <h1>Connexion</h1>
            </section>
            <LoginForm />
        </>

    // 4. Register content
    const REGISTER =
        <>
            <section className={"register-header"}>
                <h1>Inscription</h1>
            </section>
            <RegisterForm />
        </>

    // 5. Files content
    const FILES =
        <>
            <FilesOverview />
        </>

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