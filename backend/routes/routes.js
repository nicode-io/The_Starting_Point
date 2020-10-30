const express = require('express');
const controllers = require('../controllers/controllers');

const router = express.Router();


router.get('/user/:userId', controllers.getUser);

router.post('/add-user', controllers.postUser);


module.exports = router;