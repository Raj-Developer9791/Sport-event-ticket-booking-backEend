const mongoose = require('mongoose')

    const register = new 
        mongoose.Schema(
            {
                Username: String,
                Email: String,
                PhoneNum: Number,
                Password: String,
                RetypePassword: String,
            }, {timestamp:true})
module.exports=mongoose.model('Register',register)