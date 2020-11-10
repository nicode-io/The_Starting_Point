const mongoose = require('mongoose');
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
    archive: {
        type: Boolean,
        default: false,
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required:true
    },
    // machine:  [{ 
    //     type: Machine.ObjectId, 
    //     ref: 'Machine' 
    // }]
});

module.exports = mongoose.model('Reservation', ReservationSchema);