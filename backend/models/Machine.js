const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MachineSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    // category: {
    //     type: String,
    //     required:true
    // },
    tarif: {
        type: Number,
        required :true
    },
    invoice_id: [{
        type : Schema.Types.ObjectId,
        ref : "Invoice",
        
    }],
    reservation : [{
        type : Schema.Types.ObjectId,
        ref : "machineReserved"
    }],
    machines :[{
        type: Schema.Types.ObjectId,
        ref : 'Machine'
    }],
    available: {
        type: Boolean,
        default: true,
        required: true
    },
    comment: {
        type: String,
        default : " "
    }
});

module.exports = mongoose.model('Machine', MachineSchema);