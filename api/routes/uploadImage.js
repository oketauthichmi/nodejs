const path = require("path");
const multer = require("multer");
const router = require("./auth");
var Storage = multer.diskStorage({
  destination: "./images",
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});
var upload = multer({
  storage: Storage,
}).single("image");
module.exports = router;