const express = require('express');
const router = express.Router();
const role_controller = require('../controller/role.controller');

router.get('/', role_controller.role_list);
router.get('/:id', role_controller.role_detail);
router.post('/add', role_controller.role_add);
router.put('/edit/:id', role_controller.role_edit);
router.delete('/delete/:id', role_controller.role_delete);

module.exports = router;