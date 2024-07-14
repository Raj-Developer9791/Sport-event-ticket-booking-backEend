const mongoose = require('mongoose')

    const admin = new 
        mongoose.Schema(
            {
                AdminName: {type:String, required:true,}, 
                Password: {type:String, required:true,}, 
                RetypePassword: {type:String, required:true,} 
            }, {timestamp:true})
module.exports=mongoose.model('Admin',admin)