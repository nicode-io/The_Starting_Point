const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }]
});

module.exports = mongoose.model('User', UserSchema);