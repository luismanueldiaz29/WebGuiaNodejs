const multer = require('multer');
// const util = require('util');
const path = require('path');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../upload'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname);
  },
});

let uploadFile = multer({
  storage: storage
})

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFile;