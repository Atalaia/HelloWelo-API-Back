const express = require('express');
const router = express.Router();
const role_controller = require('../controller/role.controller');

router.get('/', role_controller.role_list);
router.get('/:id', role_controller.role_detail);
router.post('/', role_controller.role_add);
router.put('/:id', role_controller.role_edit);
router.delete('/:id', role_controller.role_delete);

module.exports = router;