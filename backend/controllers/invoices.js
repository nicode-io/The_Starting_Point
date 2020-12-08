const Invoice = require('../models/Invoice');


exports.getAllInvoice = async(req, res) => {
    try{
        let allInvoice = await Invoice.find().populate('reservation machineUseInInvoice');
        res.json(allInvoice);
    }catch(error){
        console.log(error);
    }
}
exports.getInvoice = async(req, res) => {
    const invoiceId = req.params.invoiceId;
    try{
        const invoice = await Invoice.findById(invoiceId , (invoice) => invoice);
        res.json(invoice);
    }catch(error){
        console.log(error);
    }
}
exports.postInvoice = async(req, res) => {
    try{
        const invoice = new Invoice(req.body);
        invoice.save();
        console.log(invoice);
        res.sendStatus(200);
    }catch(error){
        console.log(error);
    }

}
exports.getEditInvoice = (req, res) => {

}
exports.postEditInvoice = (req, res) => {

}
exports.deleteInvoice = async(req, res) => {
    const invoiceId = req.body.invoiceId;
    try{
        // NO NEED PUT IT IN A VAR
        await Invoice.findByIdAndDelete(invoiceId, (invoice) => invoice);
        console.log('Invoice deleted');
    }catch(error){
        console.log(error)
    }
}
