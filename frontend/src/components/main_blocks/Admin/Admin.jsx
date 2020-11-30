import React from "react";
import { useParams } from "react-router";
import { Link, useLocation } from 'react-router-dom';
import "./admin.css";
import { MachineForm, ProductForm , Management , Edit } from "../..";


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
                <Management />
            </section>
    } else if (params.view === "edit/{id}"){
        tab =   <section>     
                    <Edit />
                </section>
                console.log(params);
    } else {
        tab = <section>
                Agenda
            </section>
    }
    return (
        <main>
            <div className="d-flex justify-content-center">
                <Link to="/admin/agenda" className={`admin-nav-link${useLocation().pathname === "/admin/agenda" ? " is-current" : ""}`} className="ml-2">Agenda</Link>
                <Link to="/admin/pendingusers" className={`admin-nav-link${useLocation().pathname === "/admin/pendingusers" ? " is-current" : ""}`} className="ml-2">Utilisateurs en attente</Link>
                <Link to="/admin/management" className={`admin-nav-link${useLocation().pathname === "/admin/management" ? " is-current" : ""}`} className="ml-2">Gestion</Link>
            </div>
            {tab}

        </main>
    )
}