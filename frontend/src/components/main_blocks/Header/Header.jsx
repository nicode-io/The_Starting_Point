import React from 'react';
import './header.css';
import logo from '../../../assets/images/logo-header.png';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FormField } from '../..';

const Header = () => {

    let isLogged = false;

    return (
        <header className="hea-main">
            <section className={"header-logo"}>
                <Link to="/" className={`head-link${useLocation().pathname === "/" ? " is-current" : ""}`}>
                    <img src={logo} alt='Logo FabLab'></img>
                </Link>
            </section>


            <FormField label="Logout" type="button" style={{display: (isLogged) ? 'block' : 'none'}}/>
            <Link to="/login" className={`head-link${useLocation().pathname === "/login" ? " is-current" : ""}`} style={{display: (!isLogged) ? 'block' : 'none'}}>Login</Link>

            <Menu isOpen={true}>
                <h1>Menu</h1>
                <Link to="/" className={`head-link${useLocation().pathname === "/" ? " is-current" : ""}`}><span></span>Accueil</Link>
                <Link to="/reservation" className={`head-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><span></span>Réservation</Link>
                <Link to="/files" className={`head-link${useLocation().pathname === "/files" ? " is-current" : ""}`}><span></span>Mes fichiers</Link>
                <Link to="/events" className={`head-link${useLocation().pathname === "/events" ? " is-current" : ""}`}><span></span>News FabLab</Link>
            </Menu>
        </header>
    )
}

export {
    Header
};