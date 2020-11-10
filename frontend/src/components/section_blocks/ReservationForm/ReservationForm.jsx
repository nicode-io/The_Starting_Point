import React from 'react';
import { FormField } from '../..';

export function ReservationForm() {
    return (
        <section>
            <form>
                This is a reservation form
                <FormField label="Name" type="text" />
                <FormField label="Email" type="email" />
                <FormField label="Message" type="textarea" />
                <FormField label="yes" type="checkbox" />
                <FormField label="no" type="checkbox" />
                {/* import MachinePicker, Calendar */}
            </form>
        </section>
    )
}