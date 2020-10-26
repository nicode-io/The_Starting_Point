const express = require('express');
// IMPORT CONTROLLERS 
const controllers = require('../controllers/controllers');
const usersController = require('../controllers/users');
const invoicesController = require('../controllers/invoices');
const machinesController = require('../controllers/machines');
const productsController = require('../controllers/products');
const reservationsController = require('../controllers/reservations');


const router = express.Router();

// ROUTE FOR USERS 
router.get('/users', usersController.getAllUser);

router.post('/add-user', usersController.postUser);

router.get('/:userId' , usersController.getUser);

router.get('/edituser/:userId' , usersController.getEditUser);

router.post('/edituser', usersControllerer.postEditUser);

router.delete('/deleteuser/:userId' , usersControllerer.deleteUser);
// ROUTE FOR INVOICES

router.get('/invoices' , invoicesController.getAllInvoice);

router.post('/add-invoice' , invoicesController.postInvoice);

router.get('/:invoiceId' , invoicesController.getInvoice);

router.get('/editinvoice/:invoiceId', invoicesController.editInvoice);

router.post('editinvoice' , invoicesController.postEditInvoice);

router.delete('/deleteinvoice/:invoiceId', invoicesController.deleteInvoice);

// ROUTE FOR MACHINES

router.get('/machines' , machinesController.getAllMachine );

router.post('/add-machine' , machinesController.postMachine);

router.get('/:machineId' , machinesController.getMachine);

router.get('/editmachine/:machineId', machinesController.editMachine);

router.post('/editmachine' , machinesController.postEditMachine);

router.delete('/deletemachine/:machineId', machinesController.deleteMachine);

// ROUTE FOR PRODUCTS

router.get('/products', productsController.getAllProduct );

router.post('/add-product' , productsController.postMachine);

router.get('/:productId' , productsController.getProduct);

router.get('/editproduct/:productId', productsController.editMachine);

router.post('/editproduct' , productsController.postEditProduct);

router.delete('/deleteproduct/:productId', productsController.deleteProduct);

// ROUTE FOR RESERVATIONS 

router.get('/reservations' , reservationsController.getReservation);

router.post('/add-reservation' , reservationsController.postReservation);

router.get('/:reservationId' , reservationsController.getReservation);

router.get('/editreservation/:reservationId' , reservationsController.editMachine);

router.post('/editreservation' , reservationsController.postEditReservation);

router.delete('/deletereservation/:reservationId' , reservationsController.deleteReservation);




module.exports = router;