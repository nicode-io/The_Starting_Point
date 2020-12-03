const { response } = require('express');
const Machine = require('../models/Machine');

exports.getAllMachines = async (req, res) => {
    try {
        const machines = await Machine.find();
        res.json(machines);
        
        
    } catch (error) {
        console.log(error);
    }
}
exports.getMachine = async(req, res) => {
    const machineId = req.params.machineId;
    
    try {
        const machine = await Machine.findById(machineId , (machine) => machine )
        res.json(machine);
    }catch(error) {
        console.log(error);
    }
}
exports.postMachine = async(req, res) => {
    const {name , tarif, available , comment } = req.body;
    try{
        const machine = new Machine({name : name , available : available , tarif : tarif , comment: comment});
        machine.save();
    }catch(error){
        console.log(error);
    }
        
    
}
exports.postEditMachine = async(req, res) => {
// pareil
    const machineId = req.params.machineId;
    const {name , tarif, invoice, available, comment } = req.body;

    Machine.findById(machineId).then((machine) => {
        machine.name = name ;
        machine.tarif = tarif;
        machine.invoice = invoice;
        machine.available = available;
        machine.comment = comment;

        return machine.save();
    }).then(() => {
        console.log('Machine Updated');
    }).catch((err) => {
        console.log(err);
    });
}
exports.deleteMachine = async(req, res) => {
    const machineId = req.body.machineId;

    try {
        const machine = await Machine.findByIdAndDelete(machineId , (machine) => machine);
        res.send(200);
        console.log(machine);
        console.log('Machine Deleted');
    }catch(err) {
        console.log(err);
    }
}