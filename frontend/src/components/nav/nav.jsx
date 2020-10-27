import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>Home</Link>
            <span> - </span>
            <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}>Reservation</Link>
            <span> - </span>
            <Link to="/news" className={`nav-link${useLocation().pathname === "/news" ? " is-current" : ""}`}>News</Link>
            <span> - </span>
            <Link to="/document" className={`nav-link${useLocation().pathname === "/document" ? " is-current" : ""}`}>Document</Link>
            <span> - </span>
            <Link to="/login" className={`nav-link${useLocation().pathname === "/login" ? " is-current" : ""}`}>Login</Link>
            <span> - </span>
            <Link to="/register" className={`nav-link${useLocation().pathname === "/register" ? " is-current" : ""}`}>Register</Link>
        </nav>
    )
}

export default Nav;