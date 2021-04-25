import React, {useEffect} from 'react';
import {Container} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import './style.css';
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NavBar from "./NavBar";
import LoadingComponent from "./LoadingComponent";
import {useStore} from "../stores/store";

function App() {

    // Import React context with React hooks (destructured)
    const {activityStore} = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent/>

    return (
        <>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard/>
            </Container>
        </>
    );
}

export default observer(App);
