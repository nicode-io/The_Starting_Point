const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const stuffCtrl = require('../controllers/stuff');

//C  Save new thing to database
router.post('/', auth, multer, stuffCtrl.createThing);
//R  Display specific thing using its id
router.get('/:id', auth, stuffCtrl.findOne);
//R  Display all things
router.get('/', auth, stuffCtrl.displayAll);
//U  Update thing
router.put('/:id', auth, stuffCtrl.update);
//D  Delete thing
router.delete('/:id', auth, stuffCtrl.deleteOne);

module.exports = router;