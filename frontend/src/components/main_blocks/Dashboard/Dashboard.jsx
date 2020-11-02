import React from "react";
import {EventsCarousel, FilesSummary, ReservationSummary} from "../..";

export function Dashboard() {
    return (
        <main>
            <ReservationSummary />
            <FilesSummary />
            <EventsCarousel />
        </main>
    )
}
