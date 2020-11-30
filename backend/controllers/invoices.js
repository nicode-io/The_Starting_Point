const Invoice = require('../models/Invoice');


exports.getAllInvoice = async(req, res) => {
    
    try{
        console.log('on rentre dans le blog try');
        let allInvoice = await Invoice.find().populate('User');
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
exports.postInvoice = (req, res) => {

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
