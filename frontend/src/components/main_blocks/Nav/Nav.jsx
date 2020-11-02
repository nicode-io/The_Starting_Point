import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav-main">
            <div className="nav-link-main">
                <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>Home</Link>
                <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}>Reservation</Link>
                <Link to="/document" className={`nav-link${useLocation().pathname === "/document" ? " is-current" : ""}`}>Document</Link>
                <Link to="/info" className={`nav-link${useLocation().pathname === "/info" ? " is-current" : ""}`}>Info</Link>
            </div>
        </nav>
    )
}

export default Nav;