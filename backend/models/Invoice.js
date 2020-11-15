const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = Schema({
    owner : [{
        type : Schema.Types.ObjectId,
        ref : "User"
    }],
    booking : [{
        type : Schema.Types.ObjectId,
        ref : "Reservation"
    }],
    product : [{
        type : Schema.Types.ObjectId,
        ref : "Product"
    }],
    tarif : [{
        type : Schema.Types.ObjectId,
        ref : "Machines"
    }]

    
});

module.exports = mongoose.model('Invoice', InvoiceSchema);