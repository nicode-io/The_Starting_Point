const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    reservation : {
        type : Schema.Types.ObjectId,
        ref : "Reservations",
        required : true
    },
    machines : {
        type : Schema.Types.ObjectId,
        ref : "Machines",
        required : true
    },
    product : [{
        type : Schema.Types.ObjectId,
        ref : "Products",
        required : true
    }]    
});

module.exports = mongoose.model('Invoice', InvoiceSchema);