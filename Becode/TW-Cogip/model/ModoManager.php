<?php

// namespace Becode\Cogip\model;

require_once('./model/Connection.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class ModoManager extends Connection
{
    function getLastInvoices()
    { 
        return $this->dbConnect()->query('SELECT invoices.*, invoices.id AS invoice_id, users.*  FROM invoices INNER JOIN users ON invoices.user_id=users.id ORDER BY invoice_date DESC LIMIT 0, 5');
    }

    function getLastCompanies()
    {
        return $this->dbConnect()->query('SELECT company_name, country, company_vat, company_type  FROM companies');
    }

    function getLastContacts()
    {
        return $this->dbConnect()->query('SELECT * FROM users ORDER BY last_name DESC LIMIT 0, 5');
    }
}


