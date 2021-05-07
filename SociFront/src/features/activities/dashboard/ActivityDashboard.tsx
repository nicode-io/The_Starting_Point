import React, {useEffect} from "react";
import {Grid} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {useStore} from "../../../app/stores/store";


export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1)  loadActivities().catch(err => console.log(err));
    }, [activityRegistry.size, loadActivities]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activity Dashboard'/>

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    )
});
