//* Imports
// Node Build-in Libraries
const path = require('path');

// Fetch a single post
exports.getTest = async (req, res, next) => {
    res.status(200).json({
        message: 'Fetch posts successfully'
    });
};