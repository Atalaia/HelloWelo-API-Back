const express = require('express');
const router = express.Router();
const type_controller = require('../controller/type.controller');

router.get('/', type_controller.type_list);
router.get('/:id', type_controller.type_detail);
router.post('/', type_controller.type_add);
router.put('/:id', type_controller.type_edit);
router.delete('/:id', type_controller.type_delete);

module.exports = router;