import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components';

const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/reservation">
                <Reservation />
            </Route> */}
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;