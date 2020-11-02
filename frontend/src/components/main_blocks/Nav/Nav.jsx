import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Nav() {
    return (
        <nav class="nav-fablab">
            <section class="nav-buttons">
                <article class="nav-button">
                    <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}><i
                        className="fas fa-home"></i></Link>
                </article>
                <article class="nav-button">
                    <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><i
                        className="fas fa-shopping-basket"></i></Link>
                </article>
                <article class="nav-button">
                    <Link to="/news" className={`nav-link${useLocation().pathname === "/news" ? " is-current" : ""}`}><i
                        className="fas fa-file-alt"></i></Link>
                </article>
                <article class="nav-button">
                    <Link to="/document" className={`nav-link${useLocation().pathname === "/document" ? " is-current" : ""}`}><i
                        className="fas fa-info-circle"></i></Link>
                </article>
            </section>
        </nav>
    )
}

