const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")


//Create post
router.post("/", async (req, res) => {
   const newPost = new Post(req.body)
   try {
       const savePost = await newPost.save()
       res.status(200).json(savePost)
   } catch (err) {
       res.status(500).json(err)
   }
})
//Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },{
                        new: true
                    }
                )
                res.status(200).json(updatePost)
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("Bạn chỉ có thể cập nhật bài post của bạn")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                await post.delete()
                res.status(200).json("Đã xóa thành công")
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("Chỉ có thể xóa bài viết của bạn")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
//Get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err)
    }
})

//get all post
router.get("/", async (req, res) => {
    const username = req.query.username
    const catName = req.query.cat
    try {
        let posts
        if(username){
            posts = await Post.find({username})
        }
        else if(catName){
            posts = await Post.find({categories:{
                $in: [catName]
            }})
        }
        else{
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
//Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn
// đây là thống báo chưa nhập ip để kết nối