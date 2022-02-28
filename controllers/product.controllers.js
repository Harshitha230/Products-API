const res = require('express/lib/response');
const Product = require('../models/product.models');

exports.test = function (req, res) {
    res.send('Test Controller is running!');
};

exports.product_create = function(req, res){
    let product= new Product(
        {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }

    );


    product.save(function(err){
        if(err){
            return res.status(400).send("Error in creating the product");
        }
        res.status(200).send('Product created successfully');

    })
};

exports.product_getall = function(req, res){
    Product.find({}, function(err, product){
        if(err){
            res.send('Error in retrieving the products');
        }
        res.send(product);
    });
};

exports.product_get = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        
        if(err){
            return res.status(400).send('Error in retrieving the product');
        }

        res.status(200).send(product);
        

    });
};


exports.product_update= function(req, res){
    const {name, price, quantity}=req.body
    Product.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, product){
        if(!name && !price && !quantity){
            return res.status(400).send('Incomplete information for updation');

        }
        if (err){

         return res.status(500).send('Error in Updating the product');
        }
        res.status(200).send('Product updated successfully');
    });
};

exports.product_delete= function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if (err){

         return res.status().send('Error in deleting the product');
        }
        res.send('Product deleted successfully');
    });
};



