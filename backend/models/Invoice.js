const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    // user : {
    //     type : Schema.Types.ObjectId,
    //     ref : "User",
    // },
    reservation : {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true,        
    },
    machineUseInInvoice : {
        type: Schema.Types.ObjectId,
        ref: 'Machine',
        required: true,
    },
      
});

module.exports = mongoose.model('Invoice', InvoiceSchema);