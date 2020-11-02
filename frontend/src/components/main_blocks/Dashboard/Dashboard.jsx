import React from "react";
import {EventsCarousel, FilesOverview, ReservationsList} from "../..";

export function Dashboard() {
    return (
        <main>
            <ReservationsList />
            <FilesOverview />
            <EventsCarousel />
        </main>
    )
}