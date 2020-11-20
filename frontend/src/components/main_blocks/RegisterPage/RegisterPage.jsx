import React from "react";
import { RegisterForm, LoginForm } from "../..";

export function RegisterPage() {
    return (
        <main>
            <h2>Login</h2>
            <LoginForm />
            <h2>Register</h2>
            <RegisterForm />
        </main>
    )
}