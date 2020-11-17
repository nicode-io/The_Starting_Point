import React from "react";
import { useParams } from "react-router";
import { Link, useLocation } from 'react-router-dom';
import "./admin.css";
import { MachineForm } from "../..";

export function Admin() {
    let params = useParams();
    let tab;
    console.log(params.view);
    if (params.view === "pendingusers") {
        tab = <section>
                Users to validate
            </section>
    } else if (params.view === "management") {
        tab = <section>
                <MachineForm edit={false} />
            </section>
    } else {
        tab = <section>
                Agenda
            </section>
    }
    return (
        <main>
            <div>
                <Link to="/admin/agenda" className={`admin-nav-link${useLocation().pathname === "/admin/agenda" ? " is-current" : ""}`}>Agenda</Link>
                <Link to="/admin/pendingusers" className={`admin-nav-link${useLocation().pathname === "/admin/pendingusers" ? " is-current" : ""}`}>Utilisateurs en attente</Link>
                <Link to="/admin/management" className={`admin-nav-link${useLocation().pathname === "/admin/management" ? " is-current" : ""}`}>Gestion</Link>
            </div>
            {tab}

        </main>
    )
}