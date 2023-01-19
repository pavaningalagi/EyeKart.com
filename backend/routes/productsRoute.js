const express = require('express');
const {productsModel} = require("../models/productsModel");
const productsRoute = express.Router();
const jwt = require('jsonwebtoken');


productsRoute.use('/',authenticate);
productsRoute.get('/', async(req,res)=>{
    const query = req.query;
    try {
        const products = await productsModel.find(query);
        res.send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(404).send('not authorized');
    }
});

productsRoute.get('/add', async(req,res)=>{
    const product = req.body;
    try {
        const data = new productsModel(product);
            await data.save();
    }catch (error) {
        console.log(error);
        res.sendStatus(404).send('not authorized');
    }

});

productsRoute.get('/update', (req,res)=>{

});

productsRoute.get('/remove', (req,res)=>{

});



module.exports = {
    productsRoute
}





















