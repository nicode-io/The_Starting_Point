import React from "react";
import {EventsCarousel, FilesOverview, ReservationsList} from "../..";
import "./dashboard.css";
import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <main>
            <ReservationsList />
            <FilesOverview />
            <EventsCarousel />
            <Link to="/admin/management">Admin</Link>
        </main>
    )
}