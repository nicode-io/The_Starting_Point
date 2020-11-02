import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
    return (
        <header className="hea-main">
            <Menu>
                <h1>Menu</h1>
                <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}><span></span> Home</Link>
                <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><span></span> Reservation</Link>
                <Link to="/document" className={`nav-link${useLocation().pathname === "/document" ? " is-current" : ""}`}><span></span> Document</Link>
                <Link to="/info" className={`nav-link${useLocation().pathname === "/info" ? " is-current" : ""}`}><span></span> Info</Link>
            </Menu>
        </header>
    )
}

export default Header;