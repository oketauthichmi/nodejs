const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")



dotenv.config()
app.use(express.json())



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("connect mongo"))
    .catch((err) => console.log(err))


const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    }, filename: (req, file, cb) => {
        cb(null, Date.now() +"--"+file.originalname)
    }
})
const upload = multer({ storage: Storage })

app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log(req.file)
    res.status(200).json("Upload thành công")
})


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
app.use("/api/category", categoryRoute)





app.listen("5000", () => {
    console.log("running time port 5000")
})