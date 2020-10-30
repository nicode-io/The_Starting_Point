import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Reservation, News, Document, Login, Register} from '../components';

const Routes = () => {
    return (
        <Switch>
            <Route path="/register">
                <Register />
            </Route> 
            <Route path="/login">
                <Login />
            </Route> 
            <Route path="/document">
                <Document />
            </Route> 
            <Route path="/news">
                <News />
            </Route> 
            <Route path="/reservation">
                <Reservation />
            </Route> 
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;