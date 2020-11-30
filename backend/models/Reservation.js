const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    usernotlogged: {
        type: String,
        required: () => {
            return !this.userlogged;
        }
    },
    userlogged: {
        type: Schema.Types.ObjectId,
        ref : "User",
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
    invoice : {
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);