import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Reservation, News, Document, Login, Register} from '../components';
import TemplateGlobal from '../layouts/template-global/template-global';

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
            <Route path="/test">
                <TemplateGlobal />
            </Route>
            <Route path="/test_deux">
                <TemplateGlobal />
            </Route>
        </Switch>
    )
}

export default Routes;