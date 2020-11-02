import React from 'react';
import { FormSubmit } from '../../individuals/FormSubmit/FormSubmit';

export function RegisterForm() {
    return (
        <section>
            <form>
                <FormSubmit name="Register" target="/" />
            </form>
        </section>
    )
}