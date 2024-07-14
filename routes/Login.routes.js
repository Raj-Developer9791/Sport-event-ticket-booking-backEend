

module.exports=loginpage=>{
    const account=require("../controllers/Login.js")
    const router=require("express").Router()

    // router.post("/",account.create)

    // Find the data
    router.post("/findone",account.LoginAccount)

    loginpage.use('/api/login',router)
}