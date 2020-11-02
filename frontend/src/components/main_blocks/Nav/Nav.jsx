import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav-main">
            <div className="nav-link-main">
                <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>Home</Link>
                <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}>Reservation</Link>
                <Link to="/files" className={`nav-link${useLocation().pathname === "/files" ? " is-current" : ""}`}>Documents</Link>
                <Link to="/events" className={`nav-link${useLocation().pathname === "/events" ? " is-current" : ""}`}>Events</Link>
            </div>
        </nav>
    )
}

export {
    Nav
};