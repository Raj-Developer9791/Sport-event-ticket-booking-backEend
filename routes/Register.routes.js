module.exports=register=>{
    const account=require("../controllers/CreateAccount.js")
    const router=require("express").Router()

    router.post("/",account.create)

    register.use('/api/createlogin',router)
}