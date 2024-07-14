module.exports=adminpage=>{
    const admin=require("../controllers/AdminLogin.js")
    const router=require("express").Router()

    router.post('/findone',admin.AdminLoginAccount)

    adminpage.use('/api/admin',router)
}