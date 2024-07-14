module.exports=adminregister=>{
    const adminaccount=require("../controllers/Createadmin.js")
    const router=require("express").Router()

    router.post("/",adminaccount.create)

    adminregister.use("/api/createadmin",router)

}