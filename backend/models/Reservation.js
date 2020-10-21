const mongoose = require('mongoose');

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
    machine:  [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Machine' 
    }]
});

module.exports = mongoose.model('Reservation', ReservationSchema);