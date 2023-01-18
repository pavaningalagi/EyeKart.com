const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require('dotenv').config()

const url = process.env.mongoDB;
const connection = mongoose.connect(url);

module.exports = {
    connection
}



