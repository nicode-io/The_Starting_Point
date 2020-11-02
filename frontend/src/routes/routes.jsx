import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Reservation,
    Register,
    Dashboard,
    FilesSummary,
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
            <Route path="/files">
                <FilesSummary />
            </Route>
            <Route path="/files/invoices">
                <FileDetail file="invoices" />
            </Route>
            <Route path="/files/reservations">
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