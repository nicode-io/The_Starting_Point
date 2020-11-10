import React from "react";
import {EventsCarousel, FilesOverview, ReservationsList} from "../..";
import "./dashboard.css";

export function Dashboard() {
    return (
        <main>
            <ReservationsList />
            <FilesOverview />
            <EventsCarousel />
        </main>
    )
}