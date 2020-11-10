import React from "react";
import { InvoicesList, ReservationsList } from "../..";

export function Files() {
    return (
        <main>
            This is a list of all your documents
            <InvoicesList />
            <ReservationsList />
        </main>
    )
}