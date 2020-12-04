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
    Nav
} from '../components/index';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/reservation">
                 <Header user={props.user} />
                <ReservationPage />
                <Nav />
            </Route>
            <Route path="/files">
                 <Header user={props.user} />
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
                 <Header user={props.user} />
                <Events />
                <Nav />
            </Route> 
            <Route path="/login">
                 <Header user={props.user} />
                <LoginPage />
                <Nav />
            </Route>
            <Route path="/register">
                 <Header user={props.user} />
                <RegisterPage />
                <Nav />
            </Route>
            <Route path="/admin/:view">
                 <Header user={props.user} />
                <Admin />
                <Nav />
            </Route>
            <Route path="/">
                 <Header user={props.user} />
                <Dashboard />
                <Nav />
            </Route>
        </Switch>
    )
}

export default Routes;