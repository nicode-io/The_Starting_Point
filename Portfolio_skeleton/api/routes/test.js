//* Imports
// 3rd-Party Libraries
const express = require('express');

//* Create router
const router = express.Router();

//* Define routes
router.get('/posts', (req, res) => {
    res.status(200).json({
        message: 'Post fetched'
    });
});

module.exports = router;