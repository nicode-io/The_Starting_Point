<?php

// namespace Becode\Cogip\model;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once('./model/Connection.php');

class ContactManager extends Connection
{
    function getContactDetails() 
    {
        $id = $_GET['id'];
        return $this->dbConnect()->query('SELECT * FROM users WHERE id='.$id);
    }

    function getContactCompanies()
    {
        $id = $_GET['id'];
        return $this->dbConnect()->query('SELECT companies.*, users.* FROM companies INNER JOIN users ON users.company_id=companies.id WHERE users.id='.$id);
    }

    function getContactInvoices()
    {
        $id = $_GET['id'];
        return $this->dbConnect()->query('SELECT invoices.*, invoices.id AS invoice_id, users.*  FROM invoices INNER JOIN users ON invoices.user_id=users.id WHERE users.id='.$id);
    }

    function getListContacts() 
    { 
        $contactList = $this->dbConnect()->query('SELECT users.*, companies.company_name AS company_name FROM users INNER JOIN companies ON users.company_id=companies.id ORDER BY users.last_name');
        return $contactList;
    }

    function addContact() 
    {
        $firstname = '';
        $lastname = '';
        $email = '';
        $phone = '';
        $id = '';

        if (isset($_POST['first_name']) AND isset($_POST['last_name'])
        AND isset($_POST['email']) AND isset($_POST['phone']) AND isset($_POST['company_id']))
        {
            $firstname = $_POST['first_name'];
            $lastname = $_POST['last_name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $id = $_POST['company_id'];
            $btn = $_POST['button'];
            // Check dans la DB si ca existe déjà 
            $query = $this->dbConnect()->query("SELECT id FROM users ");
            $result = $query->fetchAll();

            if(!empty($_POST['button'])){
                $sql = "UPDATE users SET first_name='$firstname', last_name='$lastname', email='$email', phone='$phone', company_id='$id' 
                            WHERE id=$btn"; 
                $this->dbConnect()->exec($sql);
            }else{
            $sql = "INSERT INTO users (first_name, last_name, email, phone, company_id) 
                                VALUES (:first_name, :last_name, :email, :phone, :company_id)";
                
            $stmt = $this->dbConnect()->prepare($sql);
            $stmt->execute(['first_name' => $firstname,
                            'last_name' => $lastname,
                            'email' => $email,
                            'phone' => $phone,
                            'company_id' => $id]);
            };
         }
    }

    function deleteContact()
    {
        if (isset($_POST['delete']))
        {
            try {
                $id = $_POST['delete'];
                $sql = "DELETE FROM users WHERE id=$id";

                $stmt = $this->dbConnect();
                $stmt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt->exec($sql);
                header('Location: index.php?action=listContacts');
            }
            catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        };
    }

    function getContactData()
    {
        if (isset($_POST['edit']))
        {
            $id = $_POST['edit'];
            $data = $this->dbConnect()->query("SELECT * FROM users WHERE id=$id");
            $contact = $data->fetch();

            return $contact;
        }
    }


    function displayContact($data)
    {
        if (isset($_POST['edit']))
        {
            $c = $data['company_id'];

            $comp = $this->dbConnect()->query("SELECT company_name FROM companies WHERE id=$c");
            $result = $comp->fetch();
            $company = "<option value='". $c . "' selected > ". $result['company_name'] . " </option>";
        } 
    }

    function getListCompanies()
    {
        $result =  $this->dbConnect()->query('SELECT * FROM companies');
        $rows = $result->fetchAll();

        return $rows;
    }
}


