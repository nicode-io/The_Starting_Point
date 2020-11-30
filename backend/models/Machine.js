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
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice",
        
    }],
    available: {
        type: Boolean,
        default: true,
        required: true
    },
    comment: {
        type: String,
    }
});

module.exports = mongoose.model('Machine', MachineSchema);