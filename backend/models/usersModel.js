const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    f_name:{type: String, required: true},
    l_name:{type: String, required: true},
    mobile:{type: Number, required: true},
    email:{type: String, required: true},
    pass:{type: String, required: true}
});

const usersModel = mongoose.model('user', usersSchema);

module.exports = {
    usersModel
}









