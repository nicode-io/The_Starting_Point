import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Admin,
    ReservationPage,
    RegisterPage,
    Dashboard,
    Files,
    Events,
    FileDetail,
    LoginPage,
    Header,
    Nav,
    Edit
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
                <Header />
                <RegisterPage />
                <Nav />
            </Route>
            <Route path="/admin/:view">
                <Header />
                <Admin />
                <Nav />
            </Route>
            <Route path="/">
                <Header />
                <Dashboard />
                <Nav />
            </Route>
            <Route path="/edit/:id" children={<Edit />} />
        </Switch>
    )
}

export default Routes;