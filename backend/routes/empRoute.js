const express = require('express');
const {empsModel} = require('../models/empModel');
const empRoute = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {emp_auth} = require('../middlewares/emp_auth.middleware');
const { query } = require('express');

empRoute.get("/",(req,res)=>{
res.send("you are in employee route");
});

empRoute.post("/register",async(req,res)=>{
    try {
        const {f_name,l_name,email,pass,mobile} = req.body;
        const saltRounds = 10;
        const myPlaintextPassword = pass;
              bcrypt.hash(myPlaintextPassword, saltRounds, async(err, secured_pass)=> {
                // Store hash in your password DB.
                if(secured_pass){
                    const data = new empsModel({f_name,l_name,email,pass:secured_pass,mobile});
                          await data.save();
                    res.send({"msg": "employee Registerd successfully"});
                }else{
                    res.send(err.message);
                    res.send({"msg": "error registering employee"});
                }
            });
    } catch (error) {
        res.send(error.message);
        res.send({"msg": "error registering employee"});
    }
});

empRoute.post("/login",async(req,res)=>{
    try {
        const {email,pass} = req.body;
        const emp = await empsModel.findOne({email});
        // console.log(emp.pass);
        // res.send(emp.pass);
        if(emp){
            const key = process.env.key;
            const myPlaintextPassword = pass;
            const secured_pass = emp.pass;
            const id = emp._id;
            // console.log(id);
            bcrypt.compare(myPlaintextPassword, secured_pass, (err, result)=>{
                if(result){
                    const token = jwt.sign({ empID:id }, key ,{ expiresIn: '24h' });
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

empRoute.use(emp_auth);

empRoute.patch("/update", async(req,res)=>{
    try {
        const {empID,f_name,l_name,email,pass,mobile} = req.body;
        const new_data = req.body;
        const emp = await empsModel.findById({_id:empID});
        if(emp){
            // console.log(new_data);
            // res.send(new_data); 
            if(pass){
                const saltRounds = 10;
                const myPlaintextPassword = emp.pass;
              bcrypt.hash(myPlaintextPassword, saltRounds, async(err, secured_pass)=> {
                // Store hash in your password DB.
                if(secured_pass){
                    const data = await empsModel.findByIdAndUpdate(empID);
                        data.pass = secured_pass;
                        await data.save();
                    res.send({"msg": "emp data updated successfully"});
                }else{
                    res.send(err.message);
                    res.send({"msg": "error updating emp data"});
                }
            });

            }else if(new_data){
                const data = await empsModel.findByIdAndUpdate(empID, new_data);
                        await data.save();
                    res.send({"msg": "emp data updated successfully"});
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

empRoute.delete("/delete", async(req,res)=>{
    try {
        const {empID} = req.body;
        const data = await empsModel.findByIdAndDelete({"_id":empID});
       res.send({"msg":"emp deleted successfully"})
        
    } catch (error) {
        res.send(error);
        res.send({"msg":"You are not authorized"})
    }

});

module.exports = {
    empsRoute
}


