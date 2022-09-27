const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/', controller.product.getAll);
router.get('/search', controller.product.getSearch);
router.get('/:id', controller.product.getOne);
router.post('/', upload.single('image'), controller.product.post);
router.put('/:id', upload.single('image'), controller.product.put);
router.delete('/:id', controller.product.delete);

module.exports = router;