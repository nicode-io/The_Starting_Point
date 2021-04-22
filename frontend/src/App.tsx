import React, {useEffect, useState} from 'react';
import {Header, List} from "semantic-ui-react";
import axios from "axios";
import './App.css';

function App() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(res => {
                setActivities(res.data);
            })
    }, []);

    return (
        <div>
            <Header as={'h2'} icon={'globe'} content={'Soci\'Act'}/>
            <List>
                {activities.map((activity: any) => (
                    <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
                ))}
            </List>
        </div>
    );
}

export default App;
