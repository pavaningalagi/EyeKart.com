const express = require('express');
const {cartModel} = require("../models/cartModel");
const cartRoute = express.Router();
// const jwt = require('jsonwebtoken');
const {authenticate} = require('../middlewares/authenticate.middleware');


cartRoute.get('/', async(req,res)=>{
    // const query = req.body;
    try {
        const cart = await cartModel.find();
        res.send(cart);
    } catch (error) {
        // console.log(error);
        res.send('not authorized');
    }
});

cartRoute.use(authenticate);
cartRoute.post('/add', async(req,res)=>{
    const cart = req.body;
    try {
        const data = new cartModel(cart);
            await data.save();
            res.send({"msg":"Product added to cart"});
    }catch (error) {
        // console.log(error);
        res.send(error);
    }

});
// cartRoute.use(authenticate);
// cartRoute.patch('/update/:id',async(req, res)=>{
//     //verify token
//     const payload = req.body;
//     const id = req.params.id;
//     const cart = await cartModel.findOne({"_id":id}); //perticuler object
//     const userID_in_cart = cart.userID; //"userID in that perticular document"
//     const userID_making_req=req.body.userID; //"userID who is making the request"
//     try {
//         if(userID_making_req===userID_in_cart){
//             await cartModel.findByIdAndUpdate({"_id":id},payload);
//             res.send("updated the cart");
//         }else{
//             res.send({"msg":"You are not authorized"})
//         }
//     } catch (error) {
//         // console.log(error);
//         res.send(404, error);
//     }
    
// })

cartRoute.use(authenticate);
cartRoute.delete('/delete/:id',async(req, res)=>{
    //verify token
    const id = req.params.id;
    const cart = await cartModel.findOne({"_id":id}); //perticuler object
    const userID_in_cart = cart.userID; //"userID in that perticular document"
    const userID_making_req=req.body.userID; //"userID who is making the request"
    try {
        if(userID_making_req===userID_in_cart){
        await cartModel.findByIdAndDelete({"_id":id});
        res.send("deleted the cart item");
        }else{
            res.send({"msg":"You are not authorized"})
        }
    } catch (error) {
        // console.log(error);
        res.send(404, error);
    }
    
})



module.exports = {
    cartRoute
}