import React from 'react';
import {Container} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import {Route, useLocation} from 'react-router-dom';

import './style.css';
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";

const App = () => {

    const location = useLocation();

    return (
        <>
            <Route exact path="/" component={HomePage}/>
            <Route
                path={'/(.+)'} // Means every path match /+something will follow this route
                render={() => (
                    <>
                        <NavBar/>
                        <Container style={{marginTop: '7rem'}}>
                            <Route exact path="/activities" component={ActivityDashboard}/>
                            <Route path="/activities/:id" component={ActivityDetails}/>
                            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}
                                // the key allow us to trigger useEffect when switching from /createActivity to /manage/:id
                            />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default observer(App);
