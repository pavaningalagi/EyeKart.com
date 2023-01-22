const express = require('express');
const {usersModel} = require('../models/usersModel');
const usersRoute = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const {authenticate} = require('../middlewares/authenticate.middleware');
const { query } = require('express');

usersRoute.get("/",(req,res)=>{
res.send("you are in users route");
});

usersRoute.post("/register",async(req,res)=>{
    try {
        const {f_name,l_name,email,pass,mobile} = req.body;
        const saltRounds = 10;
        const myPlaintextPassword = pass;
              bcrypt.hash(myPlaintextPassword, saltRounds, async(err, secured_pass)=> {
                // Store hash in your password DB.
                if(secured_pass){
                    const data = new usersModel({f_name,l_name,email,pass:secured_pass,mobile});
                        await data.save();
                    res.send({"msg": "User Registerd successfully"});
                }else{
                    res.send(err.message);
                    res.send({"msg": "error registering user"});
                }
            });
    } catch (error) {
        res.send(error.message);
        res.send({"msg": "error registering user"});
    }
});

usersRoute.post("/login",async(req,res)=>{
    try {
        const {email,pass} = req.body;
        const user = await usersModel.findOne({email});
        // console.log(user.pass);
        // res.send(user.pass);
        if(user){
            const key = process.env.key;
            const myPlaintextPassword = pass;
            const secured_pass = user.pass;
            const id = user._id;
            // console.log(id);
            bcrypt.compare(myPlaintextPassword, secured_pass, (err, result)=>{
                if(result){
                    const token = jwt.sign({ userID:id }, key ,{ expiresIn: '24h' });
                    res.send({"msg":"login successfull - Welcome to EyeKart.com", "token":token});
                }else{
                    console.log(err);
                    res.send({"msg":"Invalid Credentials"});
                }
            });
        }
    } catch (error) {
        console.log(error.message);
        res.send({"msg": "Invalid Credentials"});
    }
});

// usersRoute.use(authenticate);

usersRoute.patch("/update", async(req,res)=>{
    try {
        const {userID,f_name,l_name,email,pass,mobile} = req.body;
        const new_data = req.body;
        const user = await usersModel.findById({_id:userID});
        if(user){
            // console.log(new_data);
            // res.send(new_data); 
            if(pass){
                const saltRounds = 10;
                const myPlaintextPassword = user.pass;
              bcrypt.hash(myPlaintextPassword, saltRounds, async(err, secured_pass)=> {
                // Store hash in your password DB.
                if(secured_pass){
                    const data = await usersModel.findByIdAndUpdate(userID);
                        data.pass = secured_pass;
                        await data.save();
                    res.send({"msg": "User data updated successfully"});
                }else{
                    res.send(err.message);
                    res.send({"msg": "error updating user data"});
                }
            });

            }else if(new_data){
                const data = await usersModel.findByIdAndUpdate(userID, new_data);
                        await data.save();
                    res.send({"msg": "User data updated successfully"});
                }else{
                    res.send(err);
                    res.send({"msg": "Invalid entry"});
                }
        }
        
    } catch (error) {
        res.send({"msg": "Invalid entry"});
        res.send(error);
    }

});

usersRoute.delete("/delete", async(req,res)=>{
    try {
        const {userID} = req.body;
        const data = await usersModel.findByIdAndDelete({"_id":userID});
       res.send({"msg":"User deleted successfully"})
        
    } catch (error) {
        res.send(error);
        res.send({"msg":"You are not authorized"})
    }

});

module.exports = {
    usersRoute
}


