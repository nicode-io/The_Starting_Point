import './registerPage.css';
import React from "react";
import { RegisterForm } from "../..";

export function RegisterPage() {
    return (
        <main>
            <section className={"register-header"}>
                <h1>Inscription</h1>
            </section>
            <RegisterForm />
        </main>
    )
}