import React from "react";
import {EventsCarousel, FilesOverview, ReservationSummary} from "../..";

export function Dashboard() {
    return (
        <main>
            <ReservationSummary />
            <FilesOverview />
            <EventsCarousel />
        </main>
    )
}