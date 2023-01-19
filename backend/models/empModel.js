const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    f_name:{type: String, required: true},
    l_name:{type: String, required: true},
    mobile:{type: Number, required: true},
    email:{type: String, required: true},
    pass:{type: String, required: true}
});

const empsModel = mongoose.model('user', empSchema);

module.exports = {
    empsModel
}









