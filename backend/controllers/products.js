const { response } = require('express');
const Product = require('../models/Product');

exports.getAllProduct = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}
exports.getProduct = async(req, res) => {
    const productId = req.params.productId;
    try {
        const product = await Product.findById(productId, (product) => product);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}
exports.postProduct = async(req, res) => {
    const { name , category , tarif , stock } = req.body;
    console.log(req.body);
    try {
        const product = new Product({name : name , category : category , tarif : tarif , stock : stock});
        product.save();
    }catch(error){
        console.log(error);
    }
}
exports.getEditProduct = async(req, res) => {
    // a GERE UNIQUEMENT ADMIN AURA DROIT
}
exports.postEditProduct = async(req, res) => {   
    const productId = req.params.productId;
    const {name, category, tarif, stock, invoice} = req.body;

    Product.findById(productId).then((product) => {
        product.name = name;
        product.category = category;
        product.tarif = tarif;
        product.stock = stock;
        product.invoice = invoice;

        return product.save();
    })
    .then(() => {
        console.log('Product Updated');
    }).catch((error) => {
        console.log(error);
    })
}
exports.deleteProduct = async(req, res) => {
    const productId = req.body.productId;
    try {
        const product = await Product.findByIdAndDelete(productId , (product) => product);
        console.log(product + 'This product as been deleted');
    }catch(error){
        console.log(error);
    }
}