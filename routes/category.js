const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/', controller.category.getAll);
router.get('/:id', controller.category.getOne);
router.post('/', controller.category.post);
router.put('/:id', controller.category.put);
router.delete('/:id', controller.category.delete);

module.exports = router;