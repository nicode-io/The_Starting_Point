import React from 'react'
import Detail from '../reservation-detail/reservation-detail';
import Form from '../reservation-form/reservation-form';
import List from '../reservation-list/reservation-list';
import Summary from '../reservation-summary/reservation-summary';

const Reservation = () =>{
    return (
        <main>
            <h1>Reservation page</h1>
            <Form />
            <List />
            <Detail />
            <Summary />
        </main>
    )
}

export { 
    Reservation 
};
