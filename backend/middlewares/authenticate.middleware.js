const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req,res,next)=>{
    const key = process.env.key;
    const token = req.headers.authorization;
        if(token){
            const decoded = jwt.verify(token, key);
            if(decoded){
                const userID = decoded.userID;
                req.body.userID = userID;
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
    authenticate
}