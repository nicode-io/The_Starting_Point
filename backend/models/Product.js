const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    name : {
        type: String,
        required: true 
    },
    category : {
        type: String,
        required: true
    },
    tarif : {
        type: Number,
        required: true
    },
    stock : {
        type: Number,
        required: true
    },
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }]
});

module.exports = mongoose.model('Product', ProductSchema);