const mongoose = require('mongoose');

const MachineSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    tarif: {
        type: Number,
        required : true
    },
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