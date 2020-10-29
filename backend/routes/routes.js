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

router.get('/edit-user/:userId' , usersController.getEditUser);

router.post('/edit-user', usersControllerer.postEditUser);

router.delete('/delete-user/:userId' , usersControllerer.deleteUser);
// ROUTE FOR INVOICES

router.get('/invoices' , invoicesController.getAllInvoice);

router.post('/add-invoice' , invoicesController.postInvoice);

router.get('/:invoiceId' , invoicesController.getInvoice);

router.get('/edit-invoice/:invoiceId', invoicesController.editInvoice);

router.post('/edit-invoice' , invoicesController.postEditInvoice);

router.delete('/delete-invoice/:invoiceId', invoicesController.deleteInvoice);

// ROUTE FOR MACHINES

router.get('/machines' , machinesController.getAllMachine );

router.post('/add-machine' , machinesController.postMachine);

router.get('/:machineId' , machinesController.getMachine);

router.get('/edit-machine/:machineId', machinesController.editMachine);

router.post('/edit-machine' , machinesController.postEditMachine);

router.delete('/delete-machine/:machineId', machinesController.deleteMachine);

// ROUTE FOR PRODUCTS

router.get('/products', productsController.getAllProduct );

router.post('/add-product' , productsController.postMachine);

router.get('/:productId' , productsController.getProduct);

router.get('/edit-product/:productId', productsController.editMachine);

router.post('/edit-product' , productsController.postEditProduct);

router.delete('/delete-product/:productId', productsController.deleteProduct);

// ROUTE FOR RESERVATIONS 

router.get('/reservations' , reservationsController.getReservation);

router.post('/add-reservation' , reservationsController.postReservation);

router.get('/:reservationId' , reservationsController.getReservation);

router.get('/edit-reservation/:reservationId' , reservationsController.editMachine);

router.post('/edit-reservation' , reservationsController.postEditReservation);

router.delete('/delete-reservation/:reservationId' , reservationsController.deleteReservation);




module.exports = router;