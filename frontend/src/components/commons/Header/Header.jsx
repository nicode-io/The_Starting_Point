import React, { useState }from 'react';
import './header.css';
import logo from '../../../assets/images/logo-header.png';
import { Link, useLocation } from 'react-router-dom';
import { FormField } from '../';

const Header = (props) => {
console.log(props);
    let isLogged = props.user.loggedIn;

    return (
        <header className="hea-main">
            <section className={"header-logo"}>
                <Link to="/" className={`head-link${useLocation().pathname === "/" ? " is-current" : ""}`}>
                    <img src={logo} alt='Logo FabLab'></img>
                </Link>
            </section>

            
            <FormField label="Logout" type="button" style={{display: (isLogged) ? 'block' : 'none'}}/>
            <Link to="/login" className={`head-link${useLocation().pathname === "/login" ? " is-current" : ""}`} style={{display: (!isLogged) ? 'block' : 'none'}}>Login</Link>

        </header>
    )
}

export {
    Header
};