<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once('./model/AdminManager.php');
require_once('./model/ModoManager.php');
require_once('./model/CompanyManager.php');
require_once('./model/ContactManager.php');
require_once('./model/InvoiceManager.php');
require_once('./model/LoginManager.php');
// require_once('./model/errors.php');

class Controller 
{
   function welcome()
   {
      require('./view/welcome.php');
   }

   function adminPanel()
   {
      $lastInvoices = (new AdminManager)->getLastInvoices();
      $lastCompanies = (new AdminManager)->getLastCompanies();
      $lastContacts = (new AdminManager)->getLastContacts();

      require('./view/adminView.php');
   }

   function modoPanel()
   {
      $lastInvoices = (new ModoManager)->getLastInvoices();
      $lastCompanies = (new ModoManager)->getLastCompanies();
      $lastContacts = (new ModoManager)->getLastContacts();

      require('./view/modoView.php');
   }

   function userGestion()
   {
      $listUsers = (new AdminManager)->getUserList();
      $deleteUser = (new AdminManager)->deleteUser();

      require('./view/listUser.php');
   }

   function detailCompany() 
   {
      $companyDetails = (new CompanyManager)->getCompanyDetails();
      $companyContacts = (new CompanyManager)->getCompanyContacts();
      $companyInvoices = (new CompanyManager)->getCompanyInvoices();

      require('./view/companyView.php');
   }

   function listCompanies()
   {  
      $clientsList = (new CompanyManager)->getClientsCompany();
      $providersList = (new CompanyManager)->getProvidersCompany();
      $deleteCompany = (new CompanyManager)->deleteCompany();
      
      require('./view/listCompaniesView.php');
   }

   function newCompany() 
   {
      $newCompany = (new CompanyManager)->addCompany();
      $getCompanyData = (new CompanyManager)->getCompanyData();
      $displayCompany = (new CompanyManager)->displayCompany($getCompanyData);

      require('view/newCompany.php');
   }

   function detailContact() 
   {
      $contactDetails = (new ContactManager)->getContactDetails();
      $contactInvoices = (new ContactManager)->getContactInvoices();
      $contactCompanies = (new ContactManager)->getContactCompanies();

      require('./view/contactView.php');
   }

   function listContacts() 
   {
      $listContacts = (new ContactManager)->getListContacts(); 
      $deleteContact = (new ContactManager)->deleteContact();

      require('./view/listContactsView.php');
   }

   function newContact()
   {
      $listCompanies = (new ContactManager)->getListCompanies();
      $newContact = (new ContactManager)->addContact();
      $getContactData = (new ContactManager)->getContactData();
      $displayContact = (new ContactManager)->displayContact($getContactData);


      require('view/newContact.php');
   }

   function detailInvoice() 
   {
      $invoiceDetails = (new InvoiceManager)->getInvoice();
      $invoiceCompany = (new InvoiceManager)->getInvoiceCompany();

      require('view/invoiceView.php');
   }

   function listInvoices() 
   {
      $listInvoices = (new InvoiceManager)->getListInvoices();
      $deleteInvoice = (new InvoiceManager)->deleteInvoice(); 

      require('./view/listInvoicesView.php');
   }

   function newInvoice() 
   {
      $listCompanies = (new InvoiceManager)->getListCompanies();
      $listContacts = (new InvoiceManager)->getListContacts();
      $newInvoice = (new InvoiceManager)->addInvoice();
      $getInvoiceData = (new InvoiceManager)->getInvoiceData();
      $displayInvoice = (new InvoiceManager)->displayInvoice($getInvoiceData);


      require('view/newInvoice.php');
   }

   function deleteInvoice()
   {
      $deleteInvoice = (new InvoiceManager)->deleteInvoice();
   }

   function getLogged(){
      $login = new LoginManager;
      // $login->login();
      require('view/login.php');
   }

   function getRegister(){
      $register = new LoginManager;
      // $register->register(); 
      require('view/registration.php');
   }

   function getLogout(){
      $logout = new LoginManager;
      $logout->logout(); 
      require('view/logout.php');
   }
}

