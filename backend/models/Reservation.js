const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
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