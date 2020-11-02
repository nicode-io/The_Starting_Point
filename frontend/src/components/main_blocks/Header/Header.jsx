import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
    return (
        <header className="hea-main">
            <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}>
                <img src='https://www.fablab-charleroi.be/wp-content/themes/bootstrapspada4/assets/images/logo-header.png' alt='Logo FabLab'></img>
            </Link>
            <Menu>
                <h1>Menu</h1>
                <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}><span></span> Home</Link>
                <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><span></span> Reservation</Link>
                <Link to="/files" className={`nav-link${useLocation().pathname === "/files" ? " is-current" : ""}`}><span></span> Document</Link>
                <Link to="/events" className={`nav-link${useLocation().pathname === "/events" ? " is-current" : ""}`}><span></span> Events</Link>
            </Menu>
        </header>
    )
}

export {
    Header
};