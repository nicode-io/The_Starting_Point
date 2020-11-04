const Machine = require('../models/Machine');

exports.getAllMachines = async(req, res) => {
    try {
        console.log('on entre dans la méthode');
        const machines = await Machine.find();
        console.log('on va cherche les machines ');
        res.json(machines);
        console.log('et en renvoi le tous ');
        
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
    const {name , category , tarif } = req.body;
    try{
        const machine = new Machine({name : name , category : category , tarif : tarif });
        machine.save();
    }catch(error){
        console.log(error);
    }
}
exports.getEditMachine = (req, res) => {
// uniquement admin a droit
}
exports.postEditMachine = (req, res) => {
// pareil
    const machineId = req.body.machineId;
    const {name , category , tarif } = req.body;

    Machine.findById(machineId).then((machine) => {
        machine.name = name ;
        machine.category = category;
        machine.tarif = tarif;

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
        console.log(machine);
        console.log('Machine Deleted');
    }catch(err) {
        console.log(err);
    }
}