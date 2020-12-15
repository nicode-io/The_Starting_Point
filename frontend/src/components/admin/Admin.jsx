import React from "react";
import { useParams } from "react-router";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faCalendarAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import "./admin.css";
import { Agenda, MachineForm, ProductForm , Management , Edit, UsersForm, UserEdit } from "./index";


export function Admin(props) {
    let params = useParams();
    let tab;

    if (params.view === "pendingusers") {
        tab = <section>
            Users to validate
            </section>
    } else if (params.view === "management") {
        tab = <Management />
    } else if (params.view === "edit") {
        tab = <Edit />
    } else if (params.view === "add-machine") {
        tab = <MachineForm />
    } else if (params.view === "add-product") {
        tab = <ProductForm />
    } else if (params.view === "users") {
        tab = <UsersForm />
    } else if (params.view === "user-edit") {
        tab = <UserEdit />
    } else {
        tab = <Agenda />
    }

    return (
        <main>
            <ul class="nav nav-tabs d-flex justify-content-around ">
                <li class="nav-item">
                    <Link to="/admin/agenda" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/agenda" ? " is-current" : ""}`}><FontAwesomeIcon icon={faCalendarAlt} size="1vh" />    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/admin/pendingusers" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/pendingusers" ? " is-current" : ""}`}><FontAwesomeIcon icon={faUserClock} size="1vh" /></Link>
                </li>
                <li class="nav-item">
                    <Link to="/admin/management" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/management" ? " is-current" : ""}`}><FontAwesomeIcon icon={faEdit} size="1vh" /></Link>
                </li>
            </ul>
            {tab}
            <div style={{height: '15vh'}}></div>
        </main>
    )
}

