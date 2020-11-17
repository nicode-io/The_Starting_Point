import React from 'react';
import { MachinePicker } from '../..';
import { FormField } from '../..';

export function ReservationForm() {
    return (
        <section>
            <form>
                <MachinePicker />
                
                <FormField label="Nom" type="text" />
                <FormField label="Email" type="email" />
                <p>Avez-vous besoin d'accompagnement ?</p>
                <div>
                    <FormField label="oui" type="radio" name="Test" />
                    <FormField label="non" type="radio" name="Test" />
                </div>
                <FormField label="Message" type="textarea" />
                <FormField label="Réserver" type="submit" />
            </form>
        </section>
    )
}