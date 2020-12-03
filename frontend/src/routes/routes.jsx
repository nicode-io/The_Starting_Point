import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Template } from '../components/user/Template';
import { Admin } from '../components/admin/Admin';

const Routes = () => {
    return (
        <Switch>
            <Route path={["/admin/:view", "/admin"]}>
                <Admin />
            </Route>
            <Route path={["/:view/:id", "/:view", "/"]}>
                <Template />
            </Route>
        </Switch>
    )
}

export default Routes;