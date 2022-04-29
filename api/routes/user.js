const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require("bcrypt")


//Update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(401).json("chỉ có thể cập nhật tài khoản của bạn")
    }

})
//get all user
router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
        const user = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})
//Delete
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Tài khoản đã xóa thành công")
            }
            catch (err) {
                res.status(404).json(err)
            }
        } catch (error) {
            res.status(404).json("không tìm thấy tài khoản")
        }
    }
    else{
        res.status(400).json("Không tồn tại tài khoản")
    }
})
//Get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...rest } = user._doc
        res.status(200).json(rest)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router
//Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn
// đây là thống báo chưa nhập ip để kết nối