const multer = require('multer');
const path = require('path');
const uuid = require('uuid/v4');



const upload = multer({
    dest: path.join(__dirname, '../public/upload')
}).single('img')


module.exports = upload;