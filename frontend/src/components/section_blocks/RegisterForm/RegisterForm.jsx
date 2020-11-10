import React from 'react';
import { FormSubmit } from '../..';

export function RegisterForm() {
    return (
        <section>
            <form>
                <FormSubmit name="Register" target="/" />
            </form>
        </section>
    )
}