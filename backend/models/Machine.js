const mongoose = require('mongoose');

const MachineSchema = mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    category : {
        type: String,
        required:true
    },
    tarif : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('machines', MachineSchema);