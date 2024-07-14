const CreateAdmin=require("../models/Admin.models")


exports.create=(req,res)=>{
    if(!req.body.AdminName){
        res.status(400).send({message: "content can not be empty!"})
    }
    // AccountCreate
    const adminaccount=new CreateAdmin({
        AdminName:req.body.AdminName,
        Password:req.body.Password,
        RetypePassword:req.body.RetypePassword
    }) 

    // Save the Account in databases
    adminaccount.save(adminaccount)
        .then(data => {
            res.status(400).send({message: data.message || "succesfully created"})
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occurred while creating the account."
            })
        })
}