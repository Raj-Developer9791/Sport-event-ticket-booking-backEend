const Createaccount=require("../models/Register.models")


exports.create=(req,res)=>{
    if(!req.body.Username){
        res.status(400).send({message: "content can not be empty!"})
    }

    // AccountCreate
    const newaccount=new Createaccount({
        Username:req.body.Username,
        Email:req.body.Email,
        PhoneNum:req.body.PhoneNum,
        Password:req.body.Password,
        RetypePassword:req.body.RetypePassword
    }) 

    // Save the Account in databases
    newaccount.save(newaccount)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occurred while creating the account."
            })
        })
}