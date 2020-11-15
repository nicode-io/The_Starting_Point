const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Machine = require('./Machine');

const ReservationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    usernotlogged: {
        type: String,
        required: () => {
            return !this.userlogged;
        }
    },
    userlogged: {
        type: String,
        required: () => {
            return !this.usernotlogged;
        }
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required:true
    },
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }]
});

module.exports = mongoose.model('Reservation', ReservationSchema);