const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

router.get('/', (req,res) => {
    res.send('home page');
});

router.get('/upload', (req,res) => {
    res.render('upload', {title: 'home'})
});

router.post('/upload',upload, (req, res) => {
    console.log(req.file);
    res.status('uploaded').send({title: 'uploaded'});
});

router.get('/img/:id', (req, res) => {
    res.send('Profile image', {title: 'imagen'});
});

router.get('/img/:id/delete', (req, res) => {
    res.send('eliminando...', {title: 'eliminar'});
});

module.exports = router;