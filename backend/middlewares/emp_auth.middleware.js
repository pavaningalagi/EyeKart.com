const jwt = require('jsonwebtoken');
require('dotenv').config();

const emp_auth = (req,res,next)=>{
    const key = process.env.key;
    const token = req.headers.authorization;
        if(token){
            const decoded = jwt.verify(token, key);
            if(decoded){
                const empID = decoded.empID;
                req.body.empID = empID;
                next();
            }
            else{
                res.send("Please Login");
            }
        }else{
            res.send("Please Login");
        }
};

module.exports = {
    emp_auth
}