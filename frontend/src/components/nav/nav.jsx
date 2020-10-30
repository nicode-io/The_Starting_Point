import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>Home</Link>
            <span> - </span>
            <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}>Reservation</Link>
        </nav>
    )
}

export default Nav;