<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require('./controller/Controller.php');

class Router extends Controller 
{
    function actionRouting()
    {
        if (isset($_GET['action'])) 
        {   
            //& Admin routing
            if ($_GET['action'] == 'adminPanel')
            {
                $this->adminPanel();
            } 
            //& Modo routing
            else if ($_GET['action'] == 'modoPanel')
            {
                $this->modoPanel();
            } 
            // user gestion
            else if ($_GET['action'] == 'userGestion') 
            {
                $this->userGestion();
            } 
            //& Company routing
            else if ($_GET['action'] == 'detailCompany') 
            {
                $this->detailCompany();
            }
            else if ($_GET['action'] == 'listCompanies'){
                //  listCompanies();
                $this->listCompanies();
            }
            else if ($_GET['action'] == 'newCompany') 
            {
                $this->newCompany();
            } 
            //& Contact routing
            else if ($_GET['action'] == 'detailContact') 
            {
                $this->detailContact();
            }
            else if ($_GET['action'] == 'listContacts') 
            {
                $this->listContacts();
            }
            else if ($_GET['action'] == 'newContact') 
            {
                $this->newContact();
            } 
            //& Invoice Routing
            else if ($_GET['action'] == 'detailInvoice') 
            {
                $this->detailInvoice();
            }
            else if ($_GET['action'] == 'listInvoices') 
            {
                $this->listInvoices();
            }
            else if ($_GET['action'] == 'newInvoice') 
            {
                $this->newInvoice();
            } 
            else if ($_GET['action'] == 'deleteInvoice') 
            {
                $this->deleteInvoice();
            } 
            else if ($_GET['action'] == 'registration') 
            {
                $this->getRegister();
            } 
            else if ($_GET['action'] == 'login') 
            {
                $this->getLogged();
            } 
            else if ($_GET['action'] == 'logout') 
            {
                $this->getLogout();
            } 
            else 
            {
                echo 'ERROR: action undefined :( </br>(Check that you didn\'t make a typo in the URL)';
            }
        } 
        else 
        {
            // $this->getLogged();
            $this->welcome();
        }
    }
}
