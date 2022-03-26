const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    firstname: {type: String, required : true },
    lastname :{type: String, required : true},
    email:{type: String, required : true}
}, 
{
versionKey : false,
timestamps : true,
})

const User = mongoose.model('user',userschema)
module.exports = User