import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Image} from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {useStore} from "../../../app/stores/store";
import {observer} from "mobx-react-lite";


export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    // Destructure MobX store object
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    // Grab request parameters with react-router
    const {id} = useParams<{ id: string }>();

    // Load activity according to params id if defined
    useEffect(() => {
        if (id) loadActivity(id).catch(err => console.log(err));
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent/>;

    return (
        <Card fluid>
            <Image src={`/assets/images/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button as={Link} to={`/manage/${activity.id}`} basic color="blue" content="Edit"/>
                    <Button as={Link} to='/activities' basic color="grey" content="Cancel"/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
});
