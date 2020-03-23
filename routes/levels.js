const express = require('express');
const router = express.Router();
const level_controller = require('../controller/level.controller');

router.get('/', level_controller.level_list);
router.get('/:id', level_controller.level_detail);
router.post('/', level_controller.level_add);
router.put('/:id', level_controller.level_edit);
router.delete('/:id', level_controller.level_delete);

module.exports = router;