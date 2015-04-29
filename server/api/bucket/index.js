'use strict';

var express = require('express');
var controller = require('./bucket.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/item', controller.createItem);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/item/:id', controller.destroyItem);
router.delete('/:id', controller.destroy);

module.exports = router;