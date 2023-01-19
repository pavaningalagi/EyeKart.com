const express =require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.port || 8070;
const {connection} = require("./configs/db");
const {usersRoute} = require("./routes/usersRoute");
const {productsRoute} = require("./routes/productsRoute");
const cors = require('cors');
const {authenticate} = require('./middlewares/authenticate.middleware');

app.use(cors({
    origin: "*"
}));

app.get('/', (req,res)=>{
res.send("welcome to EyeKart")
});

app.use('/users',usersRoute);


app.use('/products',productsRoute);

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Connected to Database`)
    } catch (error) {
        console.log(`Error connecting to Database`);
        console.log(error);
    }
    console.log(`server is listening on port ${PORT}`);
});