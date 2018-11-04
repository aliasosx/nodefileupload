var express = require('express');
var router = express.Router();

var assert = require('assert');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
});
var upload = multer({storage: storage});
router.post('/fileUpload', upload.single('image'), (req, res, next) => {
            res.json({'message': req.file });   
});
module.exports = router;