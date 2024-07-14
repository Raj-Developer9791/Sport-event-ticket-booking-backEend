const mongoose=require('mongoose')
const UserModel = require('../models/Register.models'); // Call the exported function with mongoose instance

async function LoginAccount(req, res) {
  const { Email, Password } = req.body;
  try {
    // Find user by email
    const user = await UserModel.findOne({Email:req.body.Email})
    
    if (user) {
      if (user.Password === Password) {
         const Data={Email,Password}
        return res.status(200).json({Data})
      }
      else{
        return res.status(401).json({message:"Invalid Password"})
      }
    }
    else{
      return res.status(401).json({message:"User Not Found"})
    }
  } 
  catch (error) {
    console.error(error );
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { LoginAccount };
