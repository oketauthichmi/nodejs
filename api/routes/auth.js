const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")


//register
router.post("/register",async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})

//Login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Sai thông tin đăng nhập")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Sai thông tin đăng nhập")

        const {password,...rest} = user._doc

        res.status(200).json(rest)
    }
    catch (err){
        res.status(500).json(err)
    }
})

module.exports = router
//Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn
// đây là thống báo chưa nhập ip để kết nối