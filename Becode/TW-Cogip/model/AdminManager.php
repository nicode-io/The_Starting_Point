<?php
session_start();
// namespace Becode\Cogip\model;

require_once('./model/Connection.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class AdminManager extends Connection
{
    function getLastInvoices()
    { 
        return $this->dbConnect()->query('SELECT invoices.*, invoices.id AS invoice_id, users.*  FROM invoices INNER JOIN users ON invoices.user_id=users.id ORDER BY invoice_date DESC LIMIT 0, 5');
    }

    function getLastCompanies()
    {
        return $this->dbConnect()->query('SELECT id, company_name, country, company_vat, company_type  FROM companies');
    }

    function getLastContacts()
    {
        return $this->dbConnect()->query('SELECT * FROM users ORDER BY last_name DESC LIMIT 0, 5');
    }

    function getUserList(){
        return $this->dbConnect()->query('SELECT id, username, email, user_type as droit FROM registration ORDER BY user_type ASC, username ASC');
    }

    function deleteUser()
    {
        if (isset($_POST['delete']))
        {
            try {
                $id = $_POST['delete'];
                $sql = "DELETE FROM registration WHERE id=$id";

                $stmt = $this->dbConnect();
                $stmt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt->exec($sql);
                header('Location: index.php?action=userGestion');
            }
            catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        };
    }
}


