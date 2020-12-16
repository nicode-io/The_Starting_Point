import React from "react";
import { useParams } from "react-router";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faCalendarAlt, faEdit, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import "./admin.css";
import { Agenda, Edit, Invoices, InvoiceForm, MachineForm, Management, ProductForm, Users, UsersForm, UserEdit } from "./index";


/**
 * This component is the main admin section.
 * It displays the content of each admin component
 * according to view params
 * @param props
 * @returns {JSX.Element}
 */
export function Admin(props) {

    // Variables
    let params = useParams();
    let tabContent;

    // Display component content according to view params
    if (params.view === "invoices") {
        tabContent = <Invoices />
    } else if (params.view === "users") {
        tabContent = <UsersForm />
    } else if (params.view === "management") {
        tabContent = <Management />
    } else if (params.view === "edit") {
        tabContent = <Edit />
    } else if (params.view === "add-machine") {
        tabContent = <MachineForm />
    } else if (params.view === "add-product") {
        tabContent = <ProductForm />
    } else if (params.view === "user-edit") {
        tabContent = <UserEdit />
    } else {
        tabContent = <Agenda />
    }

    // Render the admin menu
    return (
        <main className={"admin-main"}>
            <ul>
                <li class="nav-item">
                    <Link to="/admin/agenda" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/agenda" ? " is-current" : ""}`}><FontAwesomeIcon icon={faCalendarAlt} />    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/admin/invoices" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/invoices" ? " is-current" : ""}`}><FontAwesomeIcon icon={faFileAlt} /></Link>
                </li>
                <li class="nav-item">
                    <Link to="/admin/users" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/users" ? " is-current" : ""}`}><FontAwesomeIcon icon={faUserClock} /></Link>
                </li>
                <li class="nav-item">
                    <Link to="/admin/management" className={`ml-2 admin-nav-link${useLocation().pathname === "/admin/management" ? " is-current" : ""}`}><FontAwesomeIcon icon={faEdit} /></Link>
                </li>
            </ul>
            {tabContent}
        </main>
    )
}

