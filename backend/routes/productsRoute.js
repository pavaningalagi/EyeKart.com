const express = require('express');
const {productsModel} = require("../models/productsModel");
const productsRoute = express.Router();
// const jwt = require('jsonwebtoken');



productsRoute.get('/', async(req,res)=>{
    const query = req.query;
    try {
        const products = await productsModel.find(query);
        res.send(products);
    } catch (error) {
        // console.log(error);
        res.sendStatus(404).send('not authorized');
    }
});

productsRoute.post('/add', async(req,res)=>{
    const product = req.body;
    try {
        const data = new productsModel(product);
            await data.save();
            res.send({"msg":"Product added successfully"});
    }catch (error) {
        // console.log(error);
        res.send(error);
    }

});

// productsRoute.get('/update', (req,res)=>{

// });

// productsRoute.get('/remove', (req,res)=>{

// });



module.exports = {
    productsRoute
}





















