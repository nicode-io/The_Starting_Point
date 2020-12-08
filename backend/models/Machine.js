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
    machine : {
        type : Schema.Types.ObjectId,
        ref : "Reservation"
    },
    // machines :[{
    //     type: Schema.Types.ObjectId,
    //     ref : 'Machine'
    // }],
    available: {
        type: Boolean,
        default: true,
        required: true
    },
    comment: {
        type: String,
        default : " "
    },
    machineUseInInvoice : {
        type : Schema.Types.ObjectId,
        ref : "Machine"
    }
});

module.exports = mongoose.model('Machine', MachineSchema);