import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    ReservationPage,
    RegisterPage,
    Dashboard,
    Files,
    Events,
    FileDetail,
    LoginPage,
    Header,
    Nav
} from '../components/index';

const Routes = () => {
    return (
        <Switch>
            <Route path="/reservation">
                <Header />
                <ReservationPage />
                <Nav />
            </Route>
            <Route path="/files">
                <Header />
                <Files />
                <Nav />
            </Route>
            <Route path="/files/invoices/:invoiceId">
                <FileDetail file="invoices" />
            </Route>
            <Route path="/files/reservations/:reservationId">
                <FileDetail file="reservations" />
            </Route>
            <Route path="/events">
                <Header />
                <Events />
                <Nav />
            </Route> 
            <Route path="/login">
                <Header />
                <LoginPage />
                <Nav />
            </Route>
            <Route path="/register">
                <RegisterPage />
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