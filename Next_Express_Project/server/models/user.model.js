const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required : true
    },
    Profit:{
        type:String,
        required : true
    }
}, {timestamps:true})

const Users = mongoose.model("Users", userSchema)

module.exports = Users