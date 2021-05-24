const Product = require('../models/product');

//C  Save new thing to database
exports.createProduct = (req, res, next) => {
    // Create new instance of my model thing/thingSchema
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        inStock: req.body.inStock,
    });
    // Save to the database
    product.save().then(
        () => {
            res.status(201).json({
                message: 'Product added successfully !'
            })
        }).catch(
        error => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//R  Display all things
exports.displayAll = (req, res, next) => {
    Product.find().then(
        product => {
            res.status(200).json({product});
        }
    ).catch(
        error => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//R  Display specific product using its id
exports.findOne = (req, res, next) => {
    Product.findOne({
        _id: req.params.id
    }).then(
        product => {
            res.status(200).json({product});
        }
    ).catch(
        error => {
            res.status(404).json({
                error: error
            });
        }
    );
};