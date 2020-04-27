const express = require('express');
const router = express.Router();
const state_controller = require('../controller/state.controller');

router.get('/', state_controller.state_list);
router.get('/:id', state_controller.state_detail);
router.post('/', state_controller.state_add);
router.put('/:id', state_controller.state_edit);
router.delete('/:id', state_controller.state_delete);
router.get('/country/:id', state_controller.states_by_country);

module.exports = router;