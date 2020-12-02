import React from "react";
import { useParams } from "react-router";
import { Link, useLocation } from 'react-router-dom';
import "./admin.css";
import { MachineForm, ProductForm , Management , Edit } from "../..";


export function Admin(props) {
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
    }  else if (params.view === "edit"){
        tab =   <section>     
                    <Edit />
                </section>
    }else if (params.view === "add-machine"){
        tab =   <section>     
                    <MachineForm />
                </section>
    }else if (params.view === "add-product"){
        tab =   <section>     
                    <ProductForm />
                </section>
    } else {
        tab = <section>
                Agenda
            </section>
    }
    return (
        <main>
            <div className="d-flex justify-content-center">
                <Link to="/admin/agenda" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/agenda" ? " is-current" : ""}`}>Agenda</Link>
                <Link to="/admin/pendingusers" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/pendingusers" ? " is-current" : ""}`}>Utilisateurs en attente</Link>
                <Link to="/admin/management" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/management" ? " is-current" : ""}`}>Gestion</Link>
            </div>
            {tab}

        </main>
    )
}

