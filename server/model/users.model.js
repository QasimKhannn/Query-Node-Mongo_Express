const mongoose = require('mongoose');
// Create Schema for 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number
})
// instantiate model
const User = mongoose.model('User', userSchema)
module.exports=User