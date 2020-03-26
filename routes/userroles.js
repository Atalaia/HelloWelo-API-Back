const express = require('express');
const router = express.Router();
const userrole_controller = require('../controller/userrole.controller');

router.get('/', userrole_controller.userrole_list);
router.get('/:id', userrole_controller.userrole_detail);
router.post('/', userrole_controller.userrole_add);
router.put('/:id', userrole_controller.userrole_edit);
router.delete('/:id', userrole_controller.userrole_delete);

module.exports = router;
