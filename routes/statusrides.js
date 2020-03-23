const express = require('express');
const router = express.Router();
const statusride_controller = require('../controller/statusride.controller');

router.get('/', statusride_controller.statusride_list);
router.get('/:id', statusride_controller.statusride_detail);
router.post('/', statusride_controller.statusride_add);
router.put('/:id', statusride_controller.statusride_edit);
router.delete('/:id', statusride_controller.statusride_delete);

module.exports = router;