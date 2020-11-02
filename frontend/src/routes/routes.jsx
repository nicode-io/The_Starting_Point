import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Reservation,
    Register,
    Dashboard,
    Files,
    Events,
    FileDetail,
    LoginPage,
    Header
} from '../components/index';

const Routes = () => {
    return (
        <Switch>
            <Route path="/reservation">
                <Reservation />
            </Route> 
            <Route path="/files/invoices">
                <Files file="invoices" />
            </Route>
            <Route path="/files/reservations">
                <Files file="reservations" />
            </Route>
            <Route path="/files/invoices/:invoiceId">
                <FileDetail file="invoices" />
            </Route>
            <Route path="/files/reservations/:reservationId">
                <FileDetail file="reservations" />
            </Route>
            <Route path="/events">
                <Events />
            </Route> 
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <Register />
                <Nav />
            </Route>
            <Route path="/">
                <Header />
                <Dashboard />
                <Nav />
            </Route>
        </Switch>
    )
}

export default Routes;