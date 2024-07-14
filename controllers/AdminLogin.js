const mongoose=require('mongoose')
const AdminModel = require('../models/Admin.models'); // Call the exported function with mongoose instance

async function AdminLoginAccount(req, res) {
  const { AdminName, Password } = req.body;
  try {
    // Find user by email
    const admin = await AdminModel.findOne({AdminName:req.body.AdminName})
    
    if (admin) {
      if (admin.Password === Password) {
         const AdminData={AdminName,Password}
        return res.status(200).json({AdminData})
      }
      else{
        return res.status(401).json({message:"Invalid Password"})
      }
    }
    else{
      return res.status(401).json({message:"Admin Not Found"})
    }
  } 
  catch (error) {
    console.error(error );
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { AdminLoginAccount };
