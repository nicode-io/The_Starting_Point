const Machine = require('../models/Machine');

exports.getAllMachines = async(req, res) => {
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
        const machine = await Machine.findById(machineId , (machina) => machina )
        res.json(machine);
    }catch(error) {
        console.log(error);
    }
}
exports.postMachine = (req, res) => {

}
exports.getEditMachine = (req, res) => {

}
exports.postEditMachine = (req, res) => {

}
exports.deleteMachine = (req, res) => {
    
}